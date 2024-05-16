$('#table1').DataTable({
    "ajax": {
        "url": "http://192.168.120.11:42069/selectToJSON/products",
        "dataSrc": "",
        "error": function (xhr, error, code) {
            console.log(xhr, error, code);
        }
    },
    "columns": [
        { "data": "name" },
        { "data": "position" },
        { "data": "office" },
        { "data": "age" },
        { "data": "startDate" },
        { "data": "salary" }
    ]
});
