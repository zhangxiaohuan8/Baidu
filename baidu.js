$(function(){
    var $name=$('#name'),
        $phone=$('#phone'),
        $pwd=$('#password'),
        $num=$('#num')
        $resiger=$('#resiger'),
        $btn=$("#input"),
        i=10;
    $resiger.click(function(){
        valname();
        valphone();
        password();
        validate("#num");
    })
    $btn.click(function(){
        time();
    }
    )
    $name.focusout(function(){
        valname();
    });
    $phone.focusout(function(){
        valphone();
    });
    $pwd.focusout(function(){
        password();
    });
    $num.focusout(function(){
        timee();
    });
    function time(){
        i=10;
        timer=setInterval(function(){
            i--;
            if(i===0){
                clearInterval(timer);
                $btn.val("获取验证码");
            }else{
                $btn.attr("disabled","disabled")
                $btn.val('已发送('+i+'s)');
            }
        },1000)
    }
    function timee(){
        if(i===0){
            var $numm=$('#num-validation-message');
            $numm.html('请求超时，请稍后再试');
        }
    }
    function validate(field){
        var $data=$(field),
        $msg=$(field+'-validation-message');
        if($data.val()===''){
            $msg.html('不能为空');
            $data.html;
            return false;
        }
        $msg.html('');
        return true;
    }
    function valname(){
        var $namee=$('#name-validation-message');
        if(/[^\d]/.test($name.val())){
            if(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test($name.val())){
                $namee.html('');
                return true;
            }
        }
        else{
            $namee.html('用户名仅支持中英文，数字和下划线，且不能为纯数字');
            return false;
        }
    }
    function valphone(){
        var $phonee=$('#phone-validation-message');
        if(/^[1][3,4,5,7,8][0-9]{9}$/.test($phone.val())){
            $phonee.html('');
            return true;
        }
        else{
            $phonee.html('手机格式不正确');
            return false;
        }
    }
    function password(){
        var $pass=$('#pwd-validation-message');
        if(/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&,./`=*?]+)$)^[\w~!@#$%^&,./`=*?]{8,14}$/.test($pwd.val())){
                $pass.html('');
                return true;
        }
        else{
            $pass.html('密码设置不符合要求!');
            return false;
        }
    }
})