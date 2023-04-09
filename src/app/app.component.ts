import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestorationProject';

  isMenuOpen = false;

  selected: any;

  config = [
    {
    imageUrl: 'https://doctrineandcovenantscentral.org/wp-content/uploads/2021/04/Rigdon-edit-1-1-crop.jpeg',
    description: 'Sidney Rigdon (one of the earliest members, member of the first presidency, and saw the vision of the kingdoms of Glory with Joseph Smith) was excommunicated in September of 1844. After the death of Joseph and Hyrum Smith, The Quorum of the Twelve were scattered outside of Nauvoo. Sidney' +
    'returned quickly, and attempted to gain the favor of the people to instate him as the new head of the church. '
    + 'The Quorum of the Twelve and Brigham Young returned and thus began the succession crisis. After some campaigning and a solemn assembly, the voice of the saints voted to keep The Quorum of the Twelve intact and not make Sidney Rigdon the new president of the church. In the hearing, it was stated that Rigdon desired to try and gain supporters for his cause and make a branch-off of the church. Rigdon held secret meetings where he claimed that he held the keys of the church and he performed his own ordinations (1) ' + 
    '. It is important to note that as first counselor, Rigdon did not hold the same authority and keys as the twelve in that time. He fled Nauvoo and began his own denomination with himself at the head in Pittsburg, PA in 1845. It was called the Church of Christ, and its followers were commonly known as Rigdonites.  Internal quarrels caused most of the sect to be disbanded by 1847 (2).',
    sources: '<h3>1. <a href="https://en.wikisource.org/wiki/J._M._Grant%27s_RIGDON/Trial_of_Elder_Rigdon" class="text-blue-500 underline">Trial of Sidney Rigdon</a></h3><h3>2. <a href="https://byustudies.byu.edu/article/sidney-rigdon-post-nauvoo/" class="text-blue-500 underline">Sidney Rigdon- Post Nauvoo (BYU STUDIES)</a></h3>'

    }, 
    {
      imageUrl: 'https://doctrineandcovenantscentral.org/wp-content/uploads/2021/04/oliver-cowdery-12.58.14-PM-crop.jpg',
      description: 'Oliver Cowdery, principle scribe and long-time friend of Joseph Smith, was excommunicated in 1838. In trial (which was simply an assembly of church leaders), he was accused of encouraging lawsuits against the saints and talking poorly of the brethren, seeking to destroy Joseph Smith\'s character by accusing him of adultery, stating he would not be governed by the church in any of his affairs, selling land in Jackson County, neglecting to attend to his calling, and more. Oliver stated that he felt the council was not legal, a' + 
      'petty government controlled by ecclesiastical influence. Oliver stated that he felt the leaders were trying to take away his Constitutional privileges to property in a letter. He was not present at the trial (1). He never wavered in his testimony of the Book of Mormon. In a conversation with Thomas B. Marsh, both he and David Whitmer said they still held their testimonies of the Book of Mormon (2).',
      sources: '<h3>1. "History of Thomas Baldwin Marsh,” Deseret News, 24 March 1858, p.18.</h3><h3>2. <a href="https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?filename=6&article=1083&context=mi&type=additional" class="text-blue-500 underline">The Return of Oliver Cowdery, BYU scholars archive</a></h3>'  
    },
    {
      imageUrl: 'https://assets.churchofjesuschrist.org/91/63/9163de2381cb22b75f53d05db5a0177d94513cd1/david_whitmer.jpeg',
      description: 'David Whitmer (one of the three witnesses to the gold plates) was excommunicated in April 1838. In the trial, he was accused of sanctioning the breaking of the Word of Wisdom, saying it was OK to have alcohol every once in a while. He was accused of associating with the dissenters in Kirtland against Joseph Smith. He signed himself as President of the Church in an insulting letter to the High Council. David actually decided to leave on his own accord. He had this to say " “You sir with a majority of this Church have decided that certain Councils were legal by which it is said I have been deprived of my office as one of the Presidents of this Church I have thought and still think they were not agreeable to the revelations of God, which I believe and by my now attending this Council, and [answering] to charges as a High Priest, should be[acknowledging] the correctness and legality of those former assumed Councils, which I shall not do.' +
      'Believing as I verily do, that you and the leaders of the Councils have a determination to [pursue] your unlawful course at all hazards, and bring others to your standard in violating of the revelations, to spare you any further trouble I hereby withdraw from your fellowship and communion— choosing to seek a place among the meek and humble, where the revelations of Heaven will be observed and the rights of men regarded” (1). David Whitmer never returned to the church, but as discussed in the description of Oliver Cowdery\'s excommunication, he stood by his testimony and did not deny the Book of Mormon (2).',
      sources: '<h3>1. <a href="https://www.josephsmithpapers.org/paper-summary/minute-book-2/135" class="text-blue-500 underline">Minute Book 2, pg. 132, Joseph Smith Papers</a></h3> <h3>2. “History of Thomas Baldwin Marsh,” Deseret News, 24 March 1858, 18.</h3>',
    },
    {
      imageUrl: 'https://doctrineandcovenantscentral.org/wp-content/uploads/2021/04/John-Whitmer-ca.-1870-photograph-Church-History-Library-church-website-edit-crop.jpeg',
      description: 'John Whitmer (one of the Eight Witnesses of the Book of Mormon and first Church Historian and member of church presidency from 1834-38) and W. W. Phelps were excommunicated in the same trial on March 10, 1838. John Whitmer was accused of dishonest business practices, reportedly telling someone that he\'d buy land with someone and then purchased it himself. He told a church member that liquor every once in a while was perfectly OK (1). He and Whitmer were accused of claiming $2,000 that were set aside to building a temple. There was a unanimous vote to excommunicate them. Marcellus Cowdery called it an illegal tribunal. He saw the charges as being valid, but seemed to think the trial was unjust (2). John Whitmer appears to have been sorrowful for his actions (1), but he never came back to the church. He, however, maintained his testimony of the plates and affirmed his experience (3).',
      sources: '<h3>1. <a href="https://www.josephsmithpapers.org/paper-summary/john-whitmer-history-1831-circa-1847/89" class="text-blue-500 underline">John Whitmer, History</a></h3> <h3>2. <a href="https://www.churchofjesuschrist.org/study/manual/revelations-in-context/the-book-of-john-whitmer?lang=eng" class="text-blue-500 underline">Revelations in Context - John Whitmer</a></h3> <h3>3. <a href="https://www.gutenberg.org/files/47707/47707-h/47707-h.htm" class="text-blue-500 underline">History of the Church of Jesus Christ of Latter-day Saints, pg. 307-8</a></h3>',
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Martinharrisat87.jpg',
      description: 'Martin Harris, who financed the printing of the Book of Mormon and served as one of the three witnesses, He was excommunicated in December of 1837, but was rebaptized in 1842. He did not join the saints moving westward, but acted as a self-appointed caretaker of the deserted Kirtland temple and considered himself a “Mormon preacher”. In 1870, at age 87, he came by train to Utah. For five years he bore powerful testimony of the Book of Mormon, twice in the tabernacle. On his deathbed he reaffirmed his experience seeing an angel and the plates with Joseph Smith (1). He was excommunicated with 28 others as dissenters to the church. He was listed among several others as the leaders of a splinter group in 1837. No official documentation of the meeting of his excommunication exists, but we have evidence in letters (2).',
      sources: '<h3>1. <a href="https://www.churchofjesuschrist.org/study/ensign/2012/07/the-life-of-martin-harris-patterns-of-humility-and-repentance?lang=eng" class="text-blue-500 underline">Church of Jesus Christ: The Life of Martin Harris: Patterns of Humility and Repentance</a></h3> <h3>2. <a href="https://www.josephsmithpapers.org/doc/introduction-to-documents-volume-5-october-1835-january-1838#14552209510922606887" class="text-blue-500 underline">Joseph Smith Documents from October 1835 through January 1838 (Joseph Smith Papers)</a></h3>',

    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Lyman_E._Johnson.JPG',
      description: 'Lyman Johnson (an original member of the Quorum of the Twelve) was excommunicated in April of 1838. At the High Council trial, which he was not present for, he was accused of failing to attend church meetings, breaking the word of wisdom, corresponding with Kirtland dissenters, falsely accusing Joseph Smith of a $1,000 debt, and assaulting Phineas Young (1, 2, 3). He never did rejoin the Church. ',
      sources: '<h3>1. <a href="https://www.josephsmithpapers.org/paper-summary/minute-book-2/130" class="text-blue-500 underline">Minute Book 2 (Joseph Smith Papers)</a></h3> <h3>2. <a href="https://digitalcommons.usu.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1052&context=mormonhistory" class="text-blue-500 underline">Journal of Mormon History, Forgotten Apostle, pg. 117</a></h3> <h3>3. <a href="https://www.josephsmithpapers.org/person/lyman-eugene-johnson#13557764958868110601" class="text-blue-500 underline">Lyman Johnson Biography (JS Papers)</a></h3>',

    },
    {
      imageUrl: 'https://assets.churchofjesuschrist.org/53/a9/53a97d478d1cbfab83f100221b77b066602bc3a5/w_w_phelps.jpeg',
      description: 'W. W. Phelps was excommunicated at the same time as John Whitmer. He was accused in trial of using his position to benefit economically, reportedly telling people that to become a man of God in full, they would have to buy land from him. (1 & 2) He was also guilty of the claiming of $2,000 that were set aside for building a temple (see John Whitmer). He rejoined the church within the year, but was excommunicated again after one year. He was given a calling in Doctrine and Covenants 55 (3). This time, he was found guilty of testifying as a witness against the church in various hearings (1, scholarship archive). He was again reinstated a year later. Phelps decided to come West and was a proponent of the twelve and Brigham Young in the Succession Crisis (2). He was re-excommunicated again in 1847 for entering an unauthorized polygamous marriage. He was reinstated as a member again the next day. (2) ',
      sources: '<h3>1. <a href="https://scholarsarchive.byu.edu/facpub/3717/" class="text-blue-500 underline">We\'ll Sing and We\'ll Shout - The Life and Tiems of W. W. Phelps</a></h3><h3>2. <a href="https://rsc.byu.edu/well-sing-well-shout/aide-apostles" class="text-blue-500 underline">A Community Abandoned (Letter from Phelps to his wife in 1839)</a></h3><h3>3. <a href="https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/55?lang=eng" class="text-blue-500 underline">Doctrine and Covenants Section 55</a></h3>',

    },
  ];

  leaders = ['Sidney Rigdon', 'Oliver Cowdery', 'David Whitmer', 'John Whitmer', 'Martin Harris', 'Lyman Johnson', 'W. W. Phelps'];
  

  constructor(){
    this.selected = this.config[0];
  }
}
