function loadProducts(){
    fetch('192.168.120.11:42069/selectToJSON/products')
    then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#example tbody');
            data.forEach((product, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                `;
                tableBody.appendChild(row);
            });
            $('#example').DataTable();
        })
        .catch(error => console.error('Error fetching data:', error));
}