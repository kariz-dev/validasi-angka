$(document).ready(function(){
    $("#nomor-hp").keyup(function(){
        // mendapatkan nilai didalam input nomor handphone
        let nomorHp = $(this).val();

        // [a-z] hanya bisa alphabet
        if(!nomorHp.match(/^[0-9]*$/)){
            alert('HANYA BOLEH ANGKA!');
        }
    });
});