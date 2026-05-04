function toggleTable() {
    let table = document.getElementById("mealsTable");

    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
}

// النموذج
function showForm() {
    let selected = document.querySelectorAll(".mealCheck:checked");

    if (selected.length === 0) {
        alert("اختر وجبة واحدة على الأقل");
        return;
    }

    document.getElementById("orderForm").style.display = "block";
}

// التحقق 
function submitOrder() {
    let name = document.getElementById("name").value;
    let nid = document.getElementById("nid").value;
    let phone = document.getElementById("phone").value;

    let nameRegex = /^[\u0600-\u06FF\s]+$/;
    let nidRegex = /^\d{11}$/;
    let phoneRegex = /^09\d{8}$/;

    if (name && !nameRegex.test(name)) {
        alert("الاسم يجب أن يكون بالعربية فقط");
        return;
    }

    if (!nidRegex.test(nid)) {
        alert("الرقم الوطني يجب أن يكون 11 رقم");
        return;
    }

    if (phone && !phoneRegex.test(phone)) {
        alert("رقم الهاتف غير صحيح");
        return;
    }

    let selected = document.querySelectorAll(".mealCheck:checked");

    let total = 0;
    let details = "";

    selected.forEach(item => {
        let parts = item.value.split("-");
        let mealName = parts[0];
        let price = parseInt(parts[1]);

        total += price;
        details += mealName + " - " + price + "$\n";
    });

    let finalTotal = total * 0.95;

    alert(
        "الوجبات المختارة:\n" +
        details +
        "\nالمجموع بعد خصم 5%: " + finalTotal + "$"
    );
}


function toggleDetails(checkbox) {
    let row = checkbox.parentElement.parentElement;
    let nextRow = row.nextElementSibling;

    if (nextRow && nextRow.classList.contains("detailsRow")) {
        if (checkbox.checked) {
            nextRow.style.display = "table-row";
        } else {
            nextRow.style.display = "none";
        }
    }
}