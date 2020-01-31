const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "麻雀",
        artist: '李荣浩',
        url: 'http://music.163.com/song/media/outer/url?id=1407551413.mp3',
        cover: 'https://p2.music.126.net/TzlSVBiNtpRD2b7MT2Hi-w==/109951164527590793.jpg?param=300x300',
      },
      {
        name: '下山',
        artist: '要不要买菜',
        url: 'http://music.163.com/song/media/outer/url?id=1404885266.mp3',
        cover: 'https://p1.music.126.net/Aj4X1kpV-C2LLi-e_Xhgvg==/109951164499744148.jpg?param=300x300" location=',
      },
      {
        name: '消愁',
        artist: '毛不易',
        url: 'http://music.163.com/song/media/outer/url?id=569200213.mp3',
        cover: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=300x300',
      }
    ]
});