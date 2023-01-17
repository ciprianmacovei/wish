package main

import (
	"bufio"
	"flag"
	"fmt"
	"os"
	"os/exec"
	"runtime"
	"time"
)

func returnDepSlices(lines []string, p *int) [][]string {
	data_processed := [][]string{}
	nr_of_lines := len(lines)
	each_ps_read := nr_of_lines / *p
	remaining_deps_number := nr_of_lines - each_ps_read**p
	every_ps_deps := make([]int, *p)
	for i := 0; i < *p; i++ {
		every_ps_deps[i] = each_ps_read
	}

	if remaining_deps_number > 0 {
		for i := 0; i < remaining_deps_number; i++ {
			every_ps_deps[i] = every_ps_deps[i] + 1
		}
	}
	for i := 0; i < len(every_ps_deps); i++ {
		data_processed = append(data_processed, lines[:every_ps_deps[i]])
		lines = lines[every_ps_deps[i]:]
	}
	return data_processed
}

func main() {
	// start time
	start := time.Now()
	numCores := runtime.NumCPU()
	numGoroutines := runtime.NumGoroutine()
	// Number of processes and set it to nr of ps available to copute
	p := flag.Int("p", numCores-numGoroutines, "number or processes")
	py_version := flag.String("py_version", "3.11", "python version")
	// Set pip version to default 3
	pip_version := "3"

	flag.Parse()

	// Set pip bin exec version to default if python version is 3 and to clasic pip if not
	if string((*py_version)[0]) == "3" {
		pip_version = ""
	}

	root_path, err := os.Getwd()
	if err != nil {
		fmt.Println(err)
		return
	}

	cmd := exec.Command(fmt.Sprintf("python%s", *py_version), "-m", "venv", "venv")
	_, err_cmd := cmd.CombinedOutput()
	if err_cmd != nil {
		fmt.Println(err)
	}
	fmt.Println("venv uses python version ", *py_version)
	// Read the requirements.txt file

	file, err := os.Open("requirements.txt")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	// Create a channel to receive the results from the concurrent processes
	results := make(chan string)
	defer close(results)
	// Create a slice to store the lines
	var lines []string

	// Create a buffered reader to read the file line by line
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		// Append each line to the slice
		lines = append(lines, scanner.Text())
	}

	// get the array of with each process will read and install the deps
	ps_group_reader := returnDepSlices(lines, p)
	// Create •p* concurrent processes to install the dependencies
	for i := 0; i < *p; i++ {
		go func(i int) {
			for _, dependency := range ps_group_reader[i] {
				cmd := exec.Command(fmt.Sprintf("%s/venv/bin/pip%s", root_path, pip_version), "install", dependency)
				_, err := cmd.CombinedOutput()
				if err != nil {
					results <- fmt.Sprintf("Error installing %s: %s", dependency, err)
				} else {
					results <- fmt.Sprintf("process %d installed : %s", i, dependency)
				}
			}
		}(i)
	}

	// Wait for the concurrent processes to finish and print the results
	for i := 0; i < len(lines); i++ {
		fmt.Println(<-results)
	}
	elapsed := time.Since(start)
	fmt.Println("Time elapsed:", elapsed)
}
