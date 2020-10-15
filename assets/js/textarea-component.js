Vue.component('textarea-component', {
    template: '#textarea-template',

    created: function(){
        EventBus.$on('showMessage', this.updateText.bind(this));
    },

    data(){
        return {
            text: ""
        }
    },

    methods: {

        updateText: function(str){
            this.text = str;
        },

        copyClipboard: function(){
            console.log("Copying...");
            if(this.text.trim().length>0){
                document.querySelector("#finalMsg").select();
                document.execCommand('copy');
            }
        }
    }
});