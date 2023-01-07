const datastreams = [
  "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
  "bvwbjplbgvbhsrlpgdmjqwftvncz",
  "nppdvjthqldpwncqszvftbrmjlhg",
  "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
  "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
  // so ugly
  "rnttlvtttmnmpmhpmmzvmmhpmmnrntnnsnrnndvnddmbbtptssjcczmmbwmbmwwmmflfggwzzhjjgppwrwdwqwbbbmwbwgggqccmlmdmgdgqgpqgpgzzndddgdbbsvvfsfppwjwzjjcnjccwrwrprgppbpddnccjggfrggqngqgdqgd" +
    "dvsshqhmqqfvqvlvwvnwwmccrpcczvcczzgsgwwlggqsggmdgglblpblltbbzrbzzcscgccwssbddsmddzzvvhjjwjwrjwrwfftmttplldnllqttdhddmvdmmhsmsmqsqwqpqbpqppqdppbnpnhhppjbbrzrbrggdbddnrdrzrdrpdp" +
    "pzzfzrzgzllwlwzlllwtltslttlmtmqqbbzmzhmmjjwrjrrnzrzhzmmtbbrppmmfddjhdjdsdllrbbpfphpzpwwjvwwdpwpzwwzrrfnfwwfbbpttzjtjptpvvsfvvljjrzzmdmsddpvpgvvdcdwcwhwghwggrjjhdjhddzhhwbhwbww" +
    "brwwrfrmfrfvrfftzzqrzqrqtrqtrqtrqttgctclcwlwwvqqnlnqlnnndmnmggznzhzqzggzrzbbrwbrwrvvscvvmvhmvvbsbjsjfjpfpqpbbbbjtjptpprnndpnnrsswffmnnjhhpqhqwhhbwhbhgbbfrbrjjpmjmzzdzjdjffcvvt" +
    "wttrrcscvcncqcfcwwpgpfptpcpspllcfcssgbglgdllcdcmcpcqclctcvtvvbhbbdhhczhzshzhbhchzchchlcllwswqqmpmbbqwwzgzhggczgzffsgggjjlcjjpnjjfqjfjvfvrfrlrvvpfpcfcbffnmfmbmbgggplldblddvcvjc" +
    "vvmbmmmrvrvvnhhqttgdgvdgdqgddcsclljplpbbsvbsbfsffshsgslsllzztggttfccctwtswwrvwvnnfbnnvjnvvlgvvfppmvpmmvpmmcttjffgsffcllncntcncfclcgcppvdvpvrvbrrnnvrvhrvrzvrvnrvrdrnrqrnngsshqh" +
    "cqqbfqqzmmmzjzqztznttjffqzfqfbqqsggclgclcddtqqdppbjppqvpqvvmqmqnqcnqcqcqvqjqzqbzzbrrgfgddgtgnnpjjbzjjbbtstzszwswggfffmnnpllfvvnwnpwpqwqwlllqlmmzcmcrcmrcmrcrffnrnssjjrdjjwwqgwq" +
    "gqdggwzwjzzbfbpptctchthbbbqsqggrllldwdffvwwlrwwljwjnncmmjmvjmmqnnmrrgjgvvpqqbppqlpqllqnqdndwwlppcjcdjjcnnmddffgjjrwjrwjjhvhqvhhfssrtsrsgrrwjwhhbqqpzzrdrhrqhrqrprqqmllsszhzllcd" +
    "llpmpbbmsmjjmwmssvlslwwmtwmmgvgcvggzcgzgddsjsjfsssftfcchhfmfcmcpcpvcppqggjddljjbttwrrhghqggpghgngzngznnzqnnssqlqmqbmmmqdqqhttnqqjhhphrhccbggmjjpwpbwpprdrvvjzvvtctzzmpphwpwdpdv" +
    "vhbvvdvsdsjdjbdjdljjstswttnhhbfffmnngddlglqggvzvlzvzqqvbqbvbjbnjjsvjjwpjjzshrdtrjttvqnbltrfpvnztrwzrtgjpzgqdjfglqgjrgdzbhqpghdbfhlfjhbfjfjppfgljmgwljlsbmltgztthnzvdrgqlgddvqhz" +
    "ctdgcphfqvnpjjgzwqfvnhvzdrwtpgfdjpqnfshslqmplcprdntnhqqbqptwzvdddhcjcqrfhjqnjvpnhttblwgjwlfwntdchgfjmdbgtqtdgnzbqwzzcltwtmtqtdbvjtfvlzpcvgmrfqwfhwqmhvwhftzgmhshffnjwqbvztszsrr" +
    "glqvhfpqmbnqjsfnwdwgdtmztbvqrmztfctmvptbwnfzfgdztjgnqsrsqqqnrpgzsqszzwwwgqnnnrdzhzdbqjgbvncprzcjqchzfgnclbrmphbsdwwpvwjwlbshhgjfbhjjtdqrmrcjfnrrhqrpsbglthzpvfglqspttdpwlljhnlr" +
    "jpzchbrqcgtmcscjnwvpztfjdcwbnbgmbpgdthgnhbrtwftnscbsrndghbslflpcpjwbcjnhzcwdcslmzqbtrlnzmntlpjcsctnsqwtbffqlhfgcsflvfwnmczvsbflnnnzpfjfrcwhhcbtbjcbghtcwcgdbrwrgfgvpwtcwlwcmnmr" +
    "tcrjbwtwlrfstztsghfvrfjzzpswpqfqpvqstvbhqfjlgmtdlhqrhwzqpnqpllnlgzwptbgftmblqcwfcllbwfzdhrndfrvdvwzqvhnghlzvhldnnvrgqvlpfdnpmcgddjmstzsqfvzwftflrwtzqwjbbqhjpfbdztdfsgsztvvrvsl" +
    "gspgpdcmwszdfsddqhpzpsjgqmgzqvhchlgrmcmzwzbtwfphvgcdmhfdczhffgmqpncdjszzgwfvwsqddvbcgngbjwhmphjsmjthvbthhfwdtqmjctcmdpqpsdrnrzdgzgzctbhwsgvtjgwjbsnnjmpmqgwrnqfqbpnrpddjsrsvmcs" +
    "hhthwfrwmqsrjhlsrgfzvwmdzhwrvchppqldghgzflrnwqnvntmtdwmrpgbdbzvcmnqstzntvllcgzsnvrhqzsfncznhgrggmvrmgsqmhbdsjbsqqhzppfcwdrgdvfjdscrvpwtsdmcnczwbbjhvddprwtzfwslcfdcrqfszcgmhtdf" +
    "vlqzqtvwngzvmmqcrqpzwzhggjnphsrmnctnfhtppglspnvzrsqfgzdfrrwbzbqwvbvbnzgmdrqrnsvdpvlgcmnggsbmbtfwrvdjrtgtgcqscnfpgswgsngdqnnscffdcnlrcpdpcbpzvqcrtjhlwvgnfhhqmprthrtcvcjjwgprqqd" +
    "wfbgmzlwttjpvcjzfwbdhvngsjpgtqsvbldbcvhjhzbjzblqtqhlnbzzqfcpnzdhbplztcgvzhbgshqbccgwzhftqvtwzbwmnfrsgphhhgtsmwlqhlcchtbtggqwmbdthhmqqjtfdvfpddfdrtfjbpmwtcbfnrhwcnpdqrdtsfdmjfz" +
    "dwwgnftnwpssgqtlpdbwhnzcnfmppclsswbhcdghpnslwjznqszgdtrnpncsqsnbrplrfwpbnfnvttlzcjtvhzcpzmhfsfzfjlzqqnprpdvwbfthmrswqrcqqwrnwzmgjqqsnqdblssmhngjjvprmqbswtgzzvprwhrgjqshvmwzgrg" +
    "fmzlgrtzbmdlzncwqdftfsndvdfmmplswdbjtbcbvcvtpjvrqpghczpqvvpqwfbfhllbpvrrfsmsjhqbldcrwvzvcvzfffqvplbfbdbwctbjsljlfwtbcnpsbtpmcqgdvltmztvrcfsprbnvwplwhncgsdnrdmqnmcvpvvrlmlwtgvr" +
    "nwvzsfctdlcfvtgqmpnbwcbwvfpmqnbjvwffpjtvvgflhrnlngrzhhttdtdbvscftsqtvbrgzfgsjvwhzjcbsqcttlgwmhhvjhwhgmmdtflfdbvnhgcblqmwjfsqnngjqfbvdnsfbgwjfhpgdgvhpbvlrtpcpvhrbtqpbffzcqrvbqw" +
    "vqmmrcwtnvcgwvsqzvrwdbcnjshbnbftmmvrmjvgfdwbsjvqfdwnnvqqhbmshcrclrwhfhbtnwqvmrrvdwgcwcsrhdbqndsthmrmbjhttjtzmlflbrmhlcgsbdjcjcvwcjffnqrntpflrgfcngpchtrzpnflwjvcgbwtsnjfqsggwmw" +
    "hdvbzdpjmtwlmrslnjsndjtgjmmwmdgtnfrztppzqvqhbfzqpsdhvsshddlzwcmsndrpqhndsrjnngnmgmzrvchwlqgdnbssbhpbpgwpsrcnbphpslvqplhpgdhmrnwwjmhvnsfjmrfwtvjjrmgptvjffhbgpmfgmgrcjrwqhccssrq" +
    "jpljbpwcvsfdtmbhzsmsjsgblgpcqszsttfclrjcnsslmngmbmwqfhddbvmbvwmrmvglsl",
];

// day/6#part1
// const minLength = 4;
// day/6#part2
const minLength = 14;
const testSet = new Set();

for (let stream of datastreams) {
  if (stream.length < minLength) {
    console.log("input less than " + minLength);
  } else {
    for (let i = minLength; i < stream.length - minLength; i++) {
      //   console.log(char);
      // in reality, need to check for out of bounds
      for (let j = minLength; j > 0; j--) {
        testSet.add(stream[i - j]);
      }
      if (testSet.size === minLength) {
        console.log(i + 0);

        break;
      }
      testSet.clear();
    }
  }
}
