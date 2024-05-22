$('#table1').DataTable({
    "ajax": {
        "url": "http://10.81.234.133:42069/selectToJSON/products",
        "dataSrc": "",
        "error": function (xhr, error, code) {
            console.log(xhr, error, code);
        }
    },
    "columns": [
        { "data": "amount" },
        { "data": "position" },
        { "data": "office" },
        { "data": "age" },
        { "data": "startDate" },
        { "data": "salary" }
    ]
});
