let out = document.getElementById('message');

  fetch('https://ni420sv7l5.execute-api.us-east-1.amazonaws.com/test6/kountvisitor6', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify ({
              visitor:"unknown"
            })
          })
          .then(response => response.json())
        .then(data =>{
          out.innerText = data['message']
             console.log(data)
        }
            )


