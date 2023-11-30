import React, { Component } from 'react';
import '../App.css';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

    state = {
        currentTrack: {
        title: 'Beethoven - Moonlight Sonata',
        src: 'https://www.mfiles.co.uk/mp3-downloads/moonlight-sonata1-clarinet-and-piano.mp3',
        },
        currentTime: 0,
        currentDuration: 0,
        paused: true,
        muted: false,
        volume: 1,
        volumeInterval: 0.2,
        playlist: [
          { title: 'Beethoven - Moonlight Sonata', src: 'https://www.mfiles.co.uk/mp3-downloads/moonlight-sonata1-clarinet-and-piano.mp3' },
          { title: 'Francisco - Tarrega Lagrima', src: 'https://www.mfiles.co.uk/mp3-downloads/francisco-tarrega-lagrima.mp3' },
          { title: 'Rachmaninoff - Prelude in G Minor', src: 'https://www.mfiles.co.uk/mp3-downloads/rachmaninoff-prelude-in-g-minor.mp3' },
          { title: 'Chopin - Nocturne No. 2', src: 'https://www.mfiles.co.uk/mp3-downloads/chopin-nocturne-op9-no2.mp3' },
        ],
    };

    interval = null;

    componentDidMount() {    
      this.player = document.createElement('audio');
      this.player.src = this.state.currentTrack.src;
      this.player.load();
      if (this.state.paused) this.player.pause();
      else this.player.play();
      this.player.volume = this.state.volume;
      this.player.muted = this.state.muted;
        
      this.keyDownHandler = (e) => {
        switch (e.keyCode) {
          case 39: 
            this.player.currentTime += 1;
            break;
          case 37: 
            this.player.currentTime -= 1;
            break;
          case 38: 
            this.volumeUp();
            break;
          case 40: 
            this.volumeDown();
            break;
          case 32:
            if (e.target.tagName !== 'INPUT') {
              e.preventDefault();
              if (this.player.paused) {
                this.play();
              } else {
                this.pause();
              }
            }
            break;
            case 77: 
              this.toggleMuted();
              break;
            default:
              break;
        }
      };
      
      document.addEventListener('keydown', this.keyDownHandler);
        
      this.player.addEventListener('loadedmetadata', () => {
        this.setState({
          currentTime: this.player.currentTime,
          currentDuration: this.player.duration,
        });
      });
        
      this.player.addEventListener('play', () => this.play());
      this.player.addEventListener('pause', () => this.pause());  
      this.player.addEventListener('volumechange', (e) => {
        this.setState({ volume: e.target.volume });
      });
        
      this.player.addEventListener('ended', () => this.nextTrack());
    };
      
    componentWillUnmount() {
      this.player.removeEventListener('loadedmetadata', () => {
        this.setState({
          currentTime: this.player.currentTime,
          currentDuration: this.player.duration,
        });
      });
      this.player.removeEventListener('play', () => this.play());
      this.player.removeEventListener('pause', () => this.pause());
      this.player.removeEventListener('volumechange', (e) => {
        this.setState({ volume: e.target.volume });
      });
      this.player.removeEventListener('ended', () => this.nextTrack());
      document.removeEventListener('keydown', this.keyDownHandler);
    };

    refreshCurrentTime = () => {
      this.setState({
      currentTime: this.player.currentTime
      });
    };
    
    formateTime = (time) => {
      var h = Math.floor(time / 3600);
      var m = Math.floor((time - h * 3600) / 60);
      var s = Math.floor(time  - h * 3600 - m * 60);
      return (
        ( h > 0 ? (h + ':') : '' ) +
        ( m < 10 ? '0' + m : m ) + ':' +
        ( s < 10 ? '0' + s : s )
      );
    };

    submitHandler = (e) => {
      e.preventDefault();
      const newTrack = {
      src: this.srcInput.value,
      title: this.titleInput.value
      };
      if (
        newTrack.src.length > 0 &&
        newTrack.title.length > 0
      ) {
        e.currentTarget.reset();
        this.setCurrentTrack(newTrack);
        this.setState(state => ({
          playlist: [
          newTrack,
            ...state.playlist.filter(track =>
                track.src !== newTrack.src
            )
          ]
        }));
      }
    };
    
    play = () => {
      this.setState({
      paused: false
      }, () => {
        this.player.play();
        this.interval = setInterval(
            this.refreshCurrentTime,
            100
        );
      });
    };
    
    pause = () => {
      this.setState({
        paused: true
      }, () => {
        this.player.pause();
        clearInterval(this.interval);
      });
    };
    
    togglePlayPause = () => {
      if (this.state.paused) {
        this.play();
      } else {
        this.pause();
      }
    };
    
    toggleMuted = () => {
      this.setState(state => ({
        muted: !state.muted
      }), () => {
        this.player.muted = this.state.muted;
      });
    };
    
    volumeUp = () => {
      const volume = this.state.volume;
      const volumeInterval = this.state.volumeInterval;
      if (volume < 1) {
        let nextVolume = 1;
          if(volume + volumeInterval <= 1) {
            nextVolume = volume + volumeInterval;
          }
        this.setState({
          volume: nextVolume
        }, () => {
          this.player.volume = this.state.volume;
        });
      };
    };
    
    volumeDown = () => {
      const volume = this.state.volume;
      const volumeInterval = this.state.volumeInterval;
      if (volume > 0) {
        let nextVolume = 0;
        if(volume - volumeInterval >= 0) {
          nextVolume = volume - volumeInterval;
        }
        this.setState({
          volume: nextVolume
        }, () => { 
          this.player.volume = this.state.volume;
        })
      };
    };
    
    setCurrentTrack = (track) => {
      if (track.src === this.state.currentTrack.src) {
        if (this.state.paused){
          this.play();
        } else {
          this.pause();
        };
      }
      else {
        this.setState({
          currentTrack: track
        }, () => {
          this.player.src = this.state.currentTrack.src;
          this.player.load();
          this.play()
        });
      };
    };
    
    nextTrack = () => {
        const index = this.state.playlist
        .map(track => track.src)
        .indexOf(this.state.currentTrack.src);
        if (index < this.state.playlist.length - 1) {
        this.setCurrentTrack(
            this.state.playlist[index + 1]
        );
        } else {
        this.setCurrentTrack(
            this.state.playlist[0]
        );
        }
    }
    
    prevTrack = () => {
      const index = this.state.playlist
      .map(track => track.src)
      .indexOf(this.state.currentTrack.src);
      if (index > 0) {
        this.setCurrentTrack(
          this.state.playlist[index - 1]
        );
      } else {
        this.setCurrentTrack(
          this.state.playlist[this.state.playlist.length - 1]
        );
      };
    };

    render() {
        return (
          <section className='className="py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl sm:text-center justify-content mt-6 gap-7'>
             <div className="mb-20">
                <img className="rounded-3xl " src="https://img.antaranews.com/cache/1200x800/2023/06/20/pexels-andrea-piacquadio-3760611.jpg.webp" width="1800"/>
            </div>
            <div className="justify-between items-center md:flex mb-20 text-left">
                <h6 className="text-5xl mx-10 sm:mx-20 md:mx-20 font-bold">Meditasi</h6>
                <p className="text-black text-lg font-normal mx-10 sm:mx-20 md:mx-20 md:my-0">
                Meditasi adalah suatu praktik yang melibatkan fokus pikiran dan perhatian untuk mencapai keadaan kesadaran yang tenang, rileks, dan penuh kesadaran. Tujuan meditasi bervariasi, tetapi umumnya mencakup pengembangan keseimbangan emosional, konsentrasi, kejernihan pikiran, dan kesadaran diri.
                </p>
            </div>
            <h2 className="md:text-4xl text-4xl font-semibold mb-8 mt-20">Meditasi</h2>
            <div className="py-20 px-4 sm:px-6 lg:px-20 m-10 mx-auto max-w-2xl rounded-3xl border shadow-md sm:text-center justify-content gap-7">
                <div className='player p-4 rounded mx-auto max-w-screen-lg'>
                    <div className='title text-black' title='Track title'>
                    {this.state.currentTrack.title}
                    </div>
                    <div className='time text-black'>
                    <span className='currentTime' title='Current time'>
                        {this.formateTime(this.state.currentTime)}
                    </span>
                    {' / '}
                    <span className='currentDuration' title='Track duration'>
                        {this.formateTime(this.state.currentDuration)}
                    </span>
                    </div>
                  <div className='controls max-w-md mt-4 text-black mx-auto text-center flex items-center justify-between'>
                      <div className='controls-left flex items-center'>
                          <button onClick={this.prevTrack} title='Previous track'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -2 18 18" fill="none">
                              <path d="M4.32576 7.84365C3.70826 7.45069 3.70825 6.54928 4.32575 6.15632L12.4631 0.977999C13.1288 0.554356 14 1.03257 14 1.82166V12.1783C14 12.9674 13.1288 13.4456 12.4631 13.022L4.32576 7.84365Z" fill="black" />
                              <rect width="2" height="14" rx="1" transform="matrix(-1 0 0 1 2 0)" fill="black" />
                            </svg>
                          </button>
                          <button onClick={() => this.player.currentTime -= 10} title='Go 10 seconds back'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                              <path d="M8.17033 6.99766C7.60162 6.59956 7.60161 5.7573 8.17033 5.3592L15.4265 0.279854C16.0893 -0.18409 17 0.290062 17 1.09908V11.2578C17 12.0668 16.0893 12.5409 15.4265 12.077L8.17033 6.99766Z" fill="black"/>
                              <path d="M1.17033 6.99766C0.601616 6.59956 0.601614 5.7573 1.17033 5.3592L8.42654 0.279854C9.08931 -0.18409 10 0.290062 10 1.09908V11.2578C10 12.0668 9.08931 12.5409 8.42654 12.077L1.17033 6.99766Z" fill="black"/>
                            </svg>
                          </button>
                          <button onClick={this.togglePlayPause} size='md-36' title={this.state.paused ? 'Play' : 'Pause'}>
                            {this.state.paused ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                <path d="M19.6432 12.848C20.2699 12.4564 20.2699 11.5437 19.6432 11.152L6.53 2.95627C5.86395 2.53999 5 3.01884 5 3.80427V20.1958C5 20.9812 5.86395 21.4601 6.53 21.0438L19.6432 12.848Z" fill="black"/>
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                <rect x="4" y="3" width="6" height="18" rx="2" fill="black"/>
                                <rect x="14" y="3" width="6" height="18" rx="2" fill="black"/>
                              </svg>
                            )}
                          </button>
                          <button onClick={() => this.player.currentTime += 10} icon='forward_10' title='Skip 10 seconds'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                              <path d="M8.82967 6.99766C9.39838 6.59956 9.39839 5.7573 8.82967 5.3592L1.57346 0.279854C0.910686 -0.18409 0 0.290062 0 1.09908V11.2578C0 12.0668 0.910685 12.5409 1.57346 12.077L8.82967 6.99766Z" fill="black"/>
                              <path d="M15.8297 6.99766C16.3984 6.59956 16.3984 5.7573 15.8297 5.3592L8.57346 0.279854C7.91069 -0.18409 7 0.290062 7 1.09908V11.2578C7 12.0668 7.91069 12.5409 8.57346 12.077L15.8297 6.99766Z" fill="black"/>
                            </svg>
                          </button>
                          <button onClick={this.nextTrack} title='Next track'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M14.6742 12.8436C15.2917 12.4507 15.2917 11.5493 14.6742 11.1563L6.53688 5.978C5.87115 5.55436 5 6.03257 5 6.82166V17.1783C5 17.9674 5.87115 18.4456 6.53688 18.022L14.6742 12.8436Z" fill="black"/>
                              <rect x="17" y="5" width="2" height="14" rx="1" fill="black"/>
                            </svg>
                          </button>
                      </div>
                      <div className='controls-right flex items-center'>
                          <button onClick={this.volumeDown} icon='remove' size='md-18' title='Volume down'>
                            <svg width="24" height="24" fill="currentColor">
                              <rect x="2" y="10" width="11" height="4"></rect>
                            </svg>
                          </button>
                          <button onClick={this.toggleMuted} icon={this.state.muted ? 'volume_off' : this.state.volume === 0 ? 'volume_mute' : this.state.volume <= 0.8 ? 'volume_down' : 'volume_up' } title={this.state.muted ? 'Mute off' : 'Mute'}>
                            {this.state.muted ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 1.94319C15 1.12982 14.0806 0.656696 13.4188 1.12946L8 5H5C3.89543 5 3 5.89543 3 7V13C3 14.1046 3.89543 15 5 15H5.22832L15 7.39981V1.94319ZM15 9.93353L8.25332 15.1809L13.4188 18.8705C14.0806 19.3433 15 18.8702 15 18.0568V9.93353Z" fill="black"/>
                                <path d="M19 3L1 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                <path d="M10.4188 1.12946C11.0806 0.656696 12 1.12982 12 1.94319V18.0568C12 18.8702 11.0806 19.3433 10.4188 18.8705L5 15H2C0.89543 15 0 14.1046 0 13V7C0 5.89543 0.895431 5 2 5H5L10.4188 1.12946Z" fill="black"/>
                                <path d="M14.9938 14.9053C16.2347 13.6423 17 11.9105 17 10C17 8.08149 16.2282 6.34323 14.9781 5.0788" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.7782 2.2218C19.7688 4.21241 21 6.96241 21 9.99998C21 13.0375 19.7688 15.7875 17.7782 17.7782" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            )}
                          </button>
                          <button onClick={this.volumeUp} icon='add' size='md-18' title='Volume up'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="currentColor">
                              <rect x="10" y="12" width="22" height="6" fill="currentColor"/>
                              <rect x="17" y="4" width="6" height="22" fill="currentColor"/>
                            </svg>
                          </button>
                      </div>
                  </div>
                </div>
              <hr className='mt-4 mb-4 max-w-md mx-auto' />
              <form onSubmit={this.submitHandler} className='add-track-form flex items-center max-w-md mx-auto'>
                <input type='text' name='titleInput' placeholder='Title...' ref={el => { this.titleInput = el; }} className='w-2/5 p-2 mr-2 border rounded-3xl bg-transparent' title='Insert title for MP3 file' required/>
                <input type='url' name='srcInput' placeholder='URL to MP3...' ref={el => { this.srcInput = el; }} className='w-3/5 p-2 border rounded-3xl bg-transparent' title='Insert URL to MP3 file (http://**/*.mp3)' required/>
                <button type='submit' icon='playlist_add' className='w-1/10 p-2 ml-2 rounded flex items-center justify-center' data-title='Add MP3 to playlist' title='Add MP3 to playlist'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C0.895431 8 0 8.89543 0 10V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V10C24 8.89543 23.1046 8 22 8H2ZM9.5 13.5002C9.5 12.7323 10.3295 12.251 10.9961 12.6319L14.9806 14.9087C15.6524 15.2926 15.6524 16.2613 14.9806 16.6452L10.9961 18.9221C10.3295 19.303 9.5 18.8216 9.5 18.0538V13.5002Z" fill="black"/>
                    <rect x="1" y="4" width="22" height="2" rx="1" fill="black"/>
                    <rect x="2" width="20" height="2" rx="1" fill="black"/>
                  </svg>
                </button>
              </form>
              <ul className='max-w-md divide-y mx-auto mt-10'>
              {this.state.playlist.map((track, i) => (
                <li
                  key={i}
                  onClick={() => this.setCurrentTrack(track)}
                  className={
                    this.state.currentTrack && this.state.currentTrack.src === track.src
                      ? 'current bg-violet-500 text-white p-2 rounded-3xl flex item-left'
                      : 'p-2 flex item-left'
                  }
                  title={
                    this.state.currentTrack && this.state.currentTrack.src === track.src && !this.state.paused
                      ? 'Pause this track'
                      : 'Play this track'
                  }
                >
                  <button
                    className="ml-2"
                    onClick={this.togglePlayPause}
                    title={
                      this.state.currentTrack && this.state.currentTrack.src === track.src && !this.state.paused
                        ? 'Pause this track'
                        : 'Play this track'
                    }
                  >
                    {this.state.currentTrack && this.state.currentTrack.src === track.src && !this.state.paused ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="3" width="6" height="18" rx="2" fill="black" />
                        <rect x="14" y="3" width="6" height="18" rx="2" fill="black" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19.6432 12.848C20.2699 12.4564 20.2699 11.5437 19.6432 11.152L6.53 2.95627C5.86395 2.53999 5 3.01884 5 3.80427V20.1958C5 20.9812 5.86395 21.4601 6.53 21.0438L19.6432 12.848Z" fill="black" />
                      </svg>
                    )}
                  </button>
                  <span className="ml-4">{track.title}</span>
                </li>
              ))}
              </ul>
            </div>
          </section>
        );
    }
}

export default MusicCard;