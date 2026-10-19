document.addEventListener('DOMContentLoaded', function () {
    const btnPrint = document.getElementById('btnPrint');

    const displayYear = document.getElementById('displayYear');
    const displayMonth = document.getElementById('displayMonth');
    const displayDay = document.getElementById('displayDay');
    const displayWeekday = document.getElementById('displayWeekday');
    const displayGreeting = document.getElementById('displayGreeting');
 
    const weekdays = [
        'Chủ nhật',
        'Thứ hai',
        'Thứ ba',
        'Thứ tư',
        'Thứ năm',
        'Thứ sáu',
        'Thứ bảy'
    ];

    btnPrint.addEventListener('click', function () {
        const day = parseInt(document.getElementById('inputDay').value);
        const month = parseInt(document.getElementById('inputMonth').value);
        const year = parseInt(document.getElementById('inputYear').value);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert('Vui lòng nhập đầy đủ ngày, tháng, năm hợp lệ!');
            return;
        }

        const dateObj = new Date(year, month - 1, day);

        displayYear.innerText = dateObj.getFullYear();
        displayMonth.innerText = 'Tháng ' + (dateObj.getMonth() + 1); 
        displayDay.innerText = dateObj.getDate();

        const dayOfWeekIndex = dateObj.getDay(); 
        displayWeekday.innerText = weekdays[dayOfWeekIndex];

        // 3. Xử lý lời chào theo buổi dùng getHours()
        const currentHour = new Date().getHours(); 
        let greeting = '';

        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Chào buổi sáng!';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'Chào buổi chiều!';
        } else {
            greeting = 'Chào buổi tối!';
        }

        displayGreeting.innerText = greeting;
    });
});