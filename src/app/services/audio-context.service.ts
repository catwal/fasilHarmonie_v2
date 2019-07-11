import { Injectable } from '@angular/core';



declare global {
  interface Window { AudioContext: any; webkitAudioContext: any; }
}
@Injectable({
  providedIn: 'root'
})
export class AudioContextService {
  private audioContext: AudioContext;
  public volume: GainNode;
  public oscillators: OscillatorNode[] = [];

  constructor() { }


  prepareAudioContext() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.volume = this.audioContext.createGain();
    this.volume.connect(this.audioContext.destination);
    // TODO: changing setOn for volume gain
    this.volume.gain.setTargetAtTime(0.05, this.audioContext.currentTime, 0.01);
  }

  prepareFrequence(hz: number = 440.0) {
    const oscillator = this.audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setTargetAtTime(hz, this.audioContext.currentTime, 0.01);
    this.oscillators.push(oscillator);

    return oscillator;
  }


  playFrequence(hz: number = 440.0) {
    const oscillator = this.audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setTargetAtTime(hz, this.audioContext.currentTime, 0.01);
    oscillator.connect(this.volume);
    oscillator.start(this.audioContext.currentTime);
    this.oscillators.push(oscillator);
    return oscillator;
  }


  stop() {
    this.oscillators.map(oscillator => {
      console.log(oscillator);
      oscillator.disconnect();
      oscillator = null;
    });
  }

  stopAll() {
    this.audioContext.suspend();
  }



}
