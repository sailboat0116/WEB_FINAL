// 登录表单提交事件处理
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let account = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ account, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                let redirectUrl = "https://lioncrew.uni-lions.com.tw/account/login";
                window.location.href = redirectUrl;
            } else {
                document.getElementById('loginMessage').innerText = '錯囉小孩';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('loginMessage').innerText = 'An error occurred';
        });
});

// 註冊表單提交事件處理



