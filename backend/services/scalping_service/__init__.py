import requests
from bs4 import BeautifulSoup

class ScalpImageSource:

    url: str


    def __init__(self, url):
        self.url = url 


    def execute_scalp(self) -> str:
        response = requests.get(self.url)
        soup = BeautifulSoup(response.text, "html.parser")

        # Find all images on the webpage
        images = soup.find_all("img")
        # Initialize a variable to store the largest image src
        largest_img_src = ""
        largest_img_size = 0
        for img in images:
            # Get the src attribute of the image
            img_src = img.get("src")
            # Get the size of the image
            if "http" not in img_src:
                # sometimes an image source can be relative 
                # if it's the case, we need to join it with the base url
                continue
            size = int(requests.head(img_src).headers["Content-Length"])

            # Check if the current image is larger than the previous largest image
            if size > largest_img_size:
                largest_img_src = img_src
                largest_img_size = size
        return largest_img_src

