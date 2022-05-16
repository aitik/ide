let editor;

window.onload = function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow_night_eighties");
    editor.session.setMode("ace/mode/c_cpp");
    editor.setFontSize(22);
}
function changeLanguage() {
    let language = $("#languages").val();
    if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'python')editor.session.setMode("ace/mode/python");
    else if(language == 'java')editor.session.setMode("ace/mode/java");
    else if(language == 'javascript')editor.session.setMode("ace/mode/javascript");
}

function executeCode() {

    $.ajax({

        url: "compiler/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response)
        }
    })

    // let code = editor.getValue();
    // let script = document.createElement('script');
    // try {
    //     // script.appendChild(document.createTextNode(code));
    //     // document.body.appendChild(script);
    //     // $(".output").text(script)
    //     eval(code);
    //
    // } catch (e) {
    //     script.text = code;
    //     $(".output").text(script)
    //
    //     // document.body.appendChild(script);
    // }
}

let para = document.getElementsByTagName("p");

[...para].forEach(elem => elem.addEventListener('click', readValue));

function readValue(e) {
    let text = e.target.textContent;
    console.log(text);
    if(text){
        document.getElementById("problem_title").innerHTML = text;
        document.getElementById("problem_content").innerHTML = "Content of the" + text;

    }
}
