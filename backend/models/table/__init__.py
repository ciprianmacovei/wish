from abc import ABCMeta


class ITable(metaclass=ABCMeta):

    def __init__(self, name=None):
        self.name = name

    def get_table_rows(self):
        raise NotImplementedError

    def get_table_row(self, row_id: int):
        raise NotImplementedError

    def add_table_row(self):
        raise NotImplementedError

    def delete_table_row(self, row_id: int):
        raise NotImplementedError

    def delete_table_rows(self, rows_id: [int]):
        raise NotImplementedError

    def edit_table_row(self, row_id: int):
        raise NotImplementedError
