Vue.component("news-ticker", {
    data: function()
    {
        return {
            messages: [
                "Get lev- Oh. You were expecting a way to get the next level? You might have mental problems.",
                "You have been killed by a Basic.",
                "AJASJWKJEKFEFWKBJKBWRBFEBRGFEKRFWKSEKEKRFKJHWKJEFHKKJEKERSKJRJKFJSRH. Get off st***d cat.",
                "Who plays arras.io here? Do you? If you do not, you will die to a Shadow Alpha Hexagon when you die.",
                ["<span>I already got <span class='flipped-v'>Ֆ<sup>ա</sup></span>. How about you?</span>"],
                "I bet you can't go meta before i can.",
                "Based ofF Omega Layers and Forked off Omega Engine.",
                "You need ժ to restack. Didn't you know?",
                "There is nothing in this ticker. /j",
                "Nicolas doesn't want you to know it's Feminine version. nicole: :( nicola: :c nicolette: DXX<",
                "Achievements don't exist.",
                "Delta Levels will come in my birthday.",
                "I had to work a lot to code this thing.",
                "Play Omega Layers by Vepro.",
                "News Ticker.",
                "Get these female versions of Nicolas out before he comes.",
                "I made Gamma Levels armenian because yes."
            ],
            currentMessage: "",
            messageIndex: -1
        }
    },
    computed: {
        animationDuration: function()
        {
            return 10 + 0.1 * this.currentMessage.replace(/<.*?>/g, "").length;
        }
    },
    methods: {
        getMessage: function()
        {
            const arr = Array.from(this.messages);
            if(this.messageIndex !== -1)
            {
                arr.splice(this.messageIndex, 1);
            }
            const index = Math.floor(Math.random() * arr.length);
            this.messageIndex = index;
            const element = arr[index];
            this.currentMessage = typeof element === "string" ? element : element();
        }
    },
    mounted: function()
    {
        this.getMessage();
        this.$refs.message.onanimationiteration = e =>
        {
            const anim = this.$refs.message.style.animation.slice();
            this.getMessage();
            this.$refs.message.style.animation = "none";
            void this.$refs.message.offsetWidth; //very black magic
            this.$refs.message.style.animation = anim;
            Vue.nextTick(() =>
            {
                if(this.$refs.message.style.animationDuration === "")
                {
                    this.$refs.message.style.animationDuration = this.animationDuration + "s";
                }
            });
        };
    },
    template: `<div class="news-ticker">
    <span ref="message" :style="{'animation-duration': animationDuration + 's'}" v-html="currentMessage"></span>
</div>`
})
