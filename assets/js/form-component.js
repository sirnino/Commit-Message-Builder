Vue.component('form-component', {
    template: '#form-template',
    data(){
        return {
            types: [
                {val: 'FEAT', txt: 'FEATURE'},
                {val: 'FIX', txt: 'BUGFIX'},
                {val: 'CI', txt: 'CI'},
                {val: 'BUILD', txt: 'BUILD'},
                {val: 'DOCS', txt: 'DOCS'},
                {val: 'PERF', txt: 'PERFORMANCE'},
                {val: 'REFACTOR', txt: 'REFACTOR'},
                {val: 'STYLE', txt: 'CODE STYLE'},
                {val: 'TEST', txt: 'TEST'},
                {val: 'REVERT', txt: 'REVERT'}
            ],
            prefix: "",

            scope: {
                ori:"",
                formatted: ""
            },
            subject: {
                ori:"",
                formatted: ""
            },
            body: {
                ori:"",
                formatted: ""
            },
            footer: {
                ori:"",
                formatted: ""
            },
        };
    },
    methods: {

        formatSubject(){
            var string = this.subject.ori;

            var clean = string.trim().replace(/\s+/gm, ' ');
            var capitalized = clean.trim().charAt(0).toUpperCase() + clean.slice(1);
            var ret = capitalized;
            if(capitalized.endsWith(".") || capitalized.endsWith(",") || capitalized.endsWith(";") || capitalized.endsWith(":")){
                ret = capitalized.slice(0, -1);
            }
            
            this.subject.formatted = ret;            
        },

        formatScope(){
            this.scope.formatted = this.scope.ori.trim().replace(/\s+/gm, '_').toUpperCase();
        },
        
        formatBody(){
            this.body.formatted = this.body.ori.trim();
        },

        formatFooter(){
            this.footer.formatted = this.footer.ori.trim().replace(/\s+/gm, ' ');
        },

        generate(event){

            var s = (this.scope.formatted.length>0) ? "("+this.scope.formatted+")" : "";

            var b = (this.body.formatted.length>0) ? this.body.formatted: "";
            
            var f = (this.footer.formatted.length>0) ? this.footer.formatted : "";

            var str= ("["+this.prefix+"]"+s+" "+this.subject.formatted+"\n\n"+b+"\n\n"+f).trim();

            EventBus.$emit('showMessage', str);

            event.preventDefault();
        }
    }
});