import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.scss']
})
export class TimerComponent implements OnDestroy {
  isRunning: boolean = false;
  isPaused: boolean = false;
  startTime: number = 0;
  elapsedTime: number = 0;
  interval: any;
  formattedTime: string = '00:00:00';

  toggleTimer() {
    if (this.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.isRunning = true;
    this.isPaused = false;
    this.startTime = Date.now() - this.elapsedTime;
    this.interval = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.formattedTime = this.formatTime(this.elapsedTime);
    }, 1000);
  }

  pauseTimer() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      clearInterval(this.interval);
    } else {
      this.startTime = Date.now() - this.elapsedTime;
      this.interval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.formattedTime = this.formatTime(this.elapsedTime);
      }, 1000);
    }
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
    this.elapsedTime = 0;
    this.formattedTime = '00:00:00';
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
