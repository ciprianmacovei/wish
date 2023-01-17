import models.table as table


class Users(table.ITable):
    # id = table.Column(table.Integer, primary_key=True)

    def __init__(self):
        super().__init__("users")

    def get_table_rows(self):
        raise NotImplementedError

    def get_table_row(self, row_id: int):
        raise NotImplementedError

    def add_table_row(self):
        raise NotImplementedError

    def delete_table_row(self, row_id: int):
        raise NotImplementedError

    def delete_table_rows(self, rows_id: int):
        raise NotImplementedError

    def edit_table_row(self, row_id: int):
        raise NotImplementedError