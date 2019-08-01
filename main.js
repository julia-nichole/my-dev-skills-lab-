$(document).ready(function() {
    $('#addItem').click(function(evt) {
        let input = $('input').val();
        let newRow = `<tr>
                        <td>${input}</td>
                        <td><button class= "del">Remove</button></td>
        </tr>`;
        $('#home').append(newRow);
    })
    $('#home').on('click', 'button', function() {
        let row = $(this).closest('tr');
        row.remove();
    })
}); 