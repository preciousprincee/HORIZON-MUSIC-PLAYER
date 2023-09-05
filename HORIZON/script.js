 let app = Vue.createApp({
    data:function(){
            return{
                invisible: false,
                list:[{
                    id : 0,
                    artist :' TREVOR DANIEL',
                    songTitle: 'FALLING',
                    songsrc: './music/trevor_daniel_falling_official_music_video_mp3_56998.mp3',
                },
                {
                    id : 1,
                    artist :' Nasty c',
                    songTitle: 'Im sorry',
                    songsrc: './music/6._nasty_c_im_sorry_from_lost_files_mp3_41172.mp3',
                },{
                    id : 2,
                    artist :' dax',
                    songTitle: 'dear God',
                    songsrc: './music/dax_quot_dear_god_quot_official_music_video_mp3_83471.mp3',
                    
                }
                ,{
                    id : 3,
                    artist :'howie ',
                    songTitle: 'Im pluggrds',
                    songsrc: './music/howie X skye Im pluggrd.mp3',
                    
                }
                ,{
                    id : 4,
                    artist :'Koffee',
                    songTitle: 'Toast',
                    songsrc: './music/Koffee - Toast.mp3',
                    
                }
                ,{
                    id : 5,
                    artist :' Khalid',
                    songTitle: 'better',
                    songsrc: './music/Khalid_-_Better_(Official_Video)(128k).mp3',
                    
                }
                ,{
                    id : 6,
                    artist :' lil tjay',
                    songTitle: 'calling my phone',
                    songsrc: './music/lil_tjay_calling_my_phone_feat._6lack_official_video_mp3_59823.mp3',
                    
                }
                ,{
                    id : 7,
                    artist :' migos',
                    songTitle: 'Taco Tuesday',
                    songsrc: './music/Migos - Taco Tuesday.mp3',
                    
                }
                ,{
                    id : 8,
                    artist :' Burna boy ft stomzy',
                    songTitle: 'real life',
                    songsrc: './music/Burna-Boy-Real-Life-ft-Stormzy.mp3',
                    
                }
                ,{
                    id : 9,
                    artist :'ddg og parker ft youngboy never broke again',
                    songTitle: 'Hood melody',
                    songsrc: './music/ddg_og_parker_hood_melody_ft._youngboy_never_broke_again_official_music_video_mp3_51423.mp3',
                    
                }
                 ,{
                    id : 10,
                    artist :' Bruno Mars',
                    songTitle: 'leave_the_door_open_mp3',
                    songsrc: './music/leave_the_door_open_mp3_42257.mp3',
                    
                }
                ,{
                    id : 11,
                    artist :' Internet_Money_Ft_Gunna_Ft_Don_Toliver_NAV',
                    songTitle: 'Lemonade',
                    songsrc: './music/Internet_Money_Ft_Gunna_Ft_Don_Toliver_NAV_Lemonade.mp3',
                    
                }
            
            
            ],
            currentSong:0,

            }
        },
        
        methods:{
            toog(){
                this.invisible = !this.invisible

            }, 
             
            playsong(index){
                this.currentSong = index;
                this.invisible = true; 
            },
            playNext(){
                if (this.currentSong < this.list.length - 1){
                    this.currentSong += 1;
             }else{
                 this.currentSong = 0;
             }
            },
            playPrevious(){
                if (this.currentSong != 0){
                       this.currentSong -= 1;
                }else{
                    this.currentSong = this.list.length -1;
                }
            },



    }
})
app.component('player',{
    template:`
   
    <audio v-bind:src="song.songsrc" preload="auto" muted ref="player" />
    <section class=" rounded-2xl bg-[url('./img/bg2.jpg')] bg-contain max-w-6xl">
        <audio v-bind:src="song .songsrc" preload="auto" autoplay ref="player" />
        <div class=" container flex flex-row h-full">
            <div class="flex flex-row">
                <p   @click="goback" class="pl-7">BACK</p>
            </div>
            <div class="mx-auto ">
                    <h2 class="font-bold text-white-100 pr-12 pb-3 content-end">
                        SOUND HORIZON
                    </h2>
            </div>
          
           
        </div>
            <div class="flex-col flex space-y-4">
                    <div class=" mx-auto  ">
                        <img src="./img/FB_IMG_16283258302971333.jpg" class="mb-3 shadow-2xl rounded-2xl w-60 h-58 ">
                    </div>
                    <div class="font-bold text-4xl mx-auto  px-20">
                        <h3 class="shadow-2xl">
                            {{song.songTitle}}
                        </h3>
                    </div>
                    <div class="mx-auto">
                       <p  class="shadow-2xl  mx-10">{{song.artist}}</p>
                    </div>
                       <div class=" w-96 bg-gray-200 rounded-full h-2.5 mb-4 w-50 mx-auto dark:bg-white-700">
                         <div class="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" style="width: 45%"></div>
                       </div>
                       <div class="mx-auto "  >
                           <p class="mx-auto ">0:23/3:30</p>
                       </div>
                       <div class="flex flex-row mx-auto w-40 pb-20">
                           <div>
                            <a class="pt-1 pr-2 rounded-2xl shadow-xl" ><img src="./img/backword-removebg-preview.png" alt="" v-on:click="previous"></a>
                           </div>
                           <div>
                               <a v-on:click="toggleplay"><img :src="isplaying ?pnp[0] : pnp[1]"/> </a>
                           </div>
                           <div>
                               <a   class="rounded-2xl pr-2  shadow-xl"  ><img src="./img/foreward-removebg-preview.png" alt="" v-on:click="next" ></a>
                           </div>
                       </div>


            </div>
        

    </section>
    `,
    props:{
        song:{  
            id : Number,
            artist :String,
            songTitle: String,
            songImg: String,
            songsrc:String,
        } 
    },
    emits  : ('goback, next , previous'),
    methods: {
        goback(){
            this.$emit ('goback');
        },
        next(){
            this.$emit ('next');
        },
        previous(){
            this.$emit ('previous');
        },
        toggleplay(){
            if(this.isplaying){
                this.$refs.player.pause();
            }else{
                this.$refs.player.play();
            }
            this.isplaying = !this.isplaying
        }

        
        
    },
      data(){
        return{
            isplaying: true,
            pnp:['./img/purse-removebg-preview.png','./img/play-removebg-preview.png']

            
        }
    },
     


})
app.mount('#app')