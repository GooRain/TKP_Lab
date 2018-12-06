class NotificationButton extends HTMLButtonElement {
    constructor() {
      super();
      this.addEventListener('click', e => this.showNotification());
    }

    showNotification(){
        var text = this.getAttribute('msg');
        var timer = this.getAttribute('timer');
        if(text == null){
            text = "empty";
        }
        if(timer == null){
            timer = 3000;
        }
        $("#notification").fadeIn("slow").append(text);
        $(".dismiss").click(function(){
            $("#notification").fadeOut("slow");
        });

        $(window).load(function(){
            setTimeout(function(){ $('#notification').fadeOut() }, timer);
          });
    }
  }

customElements.define('notification-button', NotificationButton, { extends: 'button' });

