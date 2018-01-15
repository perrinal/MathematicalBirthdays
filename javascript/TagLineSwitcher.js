class TagLineSwitcher{

    constructor(myDate) {
        this.tagLines = ["Be a good geek and celebrate better birthdays",
                         "Life's too short to celebrate a birthday every ~365.25 days"];
    }
    getTagLine(){
        return this.tagLines[Math.round(Math.random()*100) % this.tagLines.length];
    }
    
}