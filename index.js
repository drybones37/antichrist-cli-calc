#!/usr/bin/env node

const { Command } = require('commander');
const cli = new Command();

cli
  .version('1.0.0')
  .description('Cli tool for calculating if a name is the number of the antichrist.');

cli.requiredOption('-c, --calc <name>', 'Name of the person to greet');
cli.option('-h, --help', 'List all of the commands for this program')
cli.showHelpAfterError(`
Here is a list of all the commands for this program:
('-h, --help', 'List all of the commands for this program')
('-c, --calc <name>', 'Calculates the number of the name entered');

To calculate a person's whole name write the name with quotes around it like so: 
"John Doe Brown"

Full command example:
antic -c "John Doe Brown"

Disclaimer: Doesn't automattically change w's or u's to v's.

`);


cli.action(() => {

	const options = cli.opts();

	if (options.calc){
  const input = cli.opts().calc;
	let cleanedInput = input.replace(/[^a-zA-Z]/g, ' ');
	let inlow = cleanedInput.toLowerCase();
	let gname = greekCalc(inlow);
	let lname = latinCalc(inlow);
	let hname = hebrewCalc(inlow);

  let message = `
	Name entered: ${input}
	Greek value: ${gname}	
	Hebrew value: ${hname}	
	Latin value: ${lname}	
		`
  console.log(`${message|| 'Invalid format. Write command like so: "antic -c "First Middle Last"" '}`);
	}

	if (options.help){
  console.log(`

Here is a list of all the commands for this program:


('-h, --help', 'List all of the commands for this program')
('-c, --calc <name>', 'Calculates the number of the name entered');
Full command example:
antic -c "First Middle Last"
              `);
	}

 function latinCalc(ln) {
		//let letterPattern = /[a-zA-Z]/;
		
	  ln = ln.replace(/xviii/g, ",18");
		ln = ln.replace(/xxiii/g, ",23");
				
		ln = ln.replace(/lxxx/g, ",80");
		ln = ln.replace(/dccc/g, ",800");
		ln = ln.replace(/viii/g, ",8");
		ln = ln.replace(/xiii/g, ",13");
		ln = ln.replace(/xxii/g, ",22");
		ln = ln.replace(/xvii/g, ",17");
		ln = ln.replace(/xxiv/g, ",24");


		ln = ln.replace(/iii/g, ",3");
		ln = ln.replace(/ccc/g, ",300");
		ln = ln.replace(/xxx/g, ",30");
		ln = ln.replace(/vii/g, ",7");
		ln = ln.replace(/xxi/g, ",21");
		ln = ln.replace(/lxx/g, ",70");
		ln = ln.replace(/xii/g, ",12");
		ln = ln.replace(/dcc/g, ",700");
		ln = ln.replace(/cii/g, ",102");
		ln = ln.replace(/xix/g, ",19");
		ln = ln.replace(/xiv/g, ",14");
		ln = ln.replace(/xvi/g, ",16");

		ln = ln.replace(/ii/g, ",2");
		ln = ln.replace(/xx/g, ",20");
		ln = ln.replace(/cc/g, ",200");
		ln = ln.replace(/xv/g, ",15");
		ln = ln.replace(/xl/g, ",40");
		ln = ln.replace(/xc/g, ",90");
		ln = ln.replace(/lx/g, ",60");
		ln = ln.replace(/iv/g, ",4");
		ln = ln.replace(/vi/g, ",6");
		ln = ln.replace(/ix/g, ",9");
		ln = ln.replace(/xi/g, ",11");
		ln = ln.replace(/ci/g, ",101");
		ln = ln.replace(/cd/g, ",400");
		ln = ln.replace(/dc/g, ",600");
		ln = ln.replace(/cm/g, ",900");

	 	ln = ln.replace(/i/g, ",1");
		ln = ln.replace(/v/g, ",5");
		ln = ln.replace(/x/g, ",10");
		ln = ln.replace(/l/g, ",50");
		ln = ln.replace(/c/g, ",100");
		ln = ln.replace(/d/g, ",500");
		ln = ln.replace(/m/g, ",1000");

		// Replace the characters with no value
		ln = ln.replace(/a/g, " ")
		ln = ln.replace(/b/g, " ")
		ln = ln.replace(/e/g, " ")
		ln = ln.replace(/f/g, " ")
		ln = ln.replace(/g/g, " ")
		ln = ln.replace(/h/g, " ")
		ln = ln.replace(/j/g, " ")
		ln = ln.replace(/k/g, " ")

		ln = ln.replace(/n/g, " ")
		ln = ln.replace(/o/g, " ")
		ln = ln.replace(/p/g, " ")
		ln = ln.replace(/q/g, " ")
		ln = ln.replace(/r/g, " ")
		ln = ln.replace(/s/g, " ")
		ln = ln.replace(/t/g, " ")
		ln = ln.replace(/u/g, " ")
		ln = ln.replace(/w/g, " ")
		ln = ln.replace(/y/g, " ")
		ln = ln.replace(/z/g, " ")
		
	 	ln = ln.split(',');
	 	let w = 0;
			
		ln.forEach(element => {
			w = w + Number(element);
		});

		amnt = w;
		return amnt;
	 }

 function greekCalc(gn) {
		//let letterPattern = /[a-zA-Z]/;
				
		gn = gn.replace(/sampi/g, ",900");
		gn = gn.replace(/th/g, ",9");
		gn = gn.replace(/rh/g, ",100");
		gn = gn.replace(/ph/g, ",500");
		gn = gn.replace(/kh/g, ",600");
		gn = gn.replace(/ps/g, ",700");
		gn = gn.replace(/st/g, ",6");
		gn = gn.replace(/a/g, ",1")
		gn = gn.replace(/b/g, ",2")
		gn = gn.replace(/g/g, ",3")
		gn = gn.replace(/d/g, ",4")
		gn = gn.replace(/e/g, ",5")
		gn = gn.replace(/w/g, ",6")
		gn = gn.replace(/z/g, ",7")
		gn = gn.replace(/ē/g, ",8")
		gn = gn.replace(/i/g, ",10")
		gn = gn.replace(/k/g, ",20"),
		gn = gn.replace(/l/g, ",30"),
		gn = gn.replace(/m/g, ",40"),
		gn = gn.replace(/n/g, ",50"),
		gn = gn.replace(/x/g, ",60"),
		gn = gn.replace(/o/g, ",70"),
		gn = gn.replace(/p/g, ",80"),
		gn = gn.replace(/q/g, ",90")
		gn = gn.replace(/r/g, ",100")
		gn = gn.replace(/s/g, ",200")
		gn = gn.replace(/t/g, ",300")
		gn = gn.replace(/u/g, ",400")
		gn = gn.replace(/ō/g, ",800")

		// Replace the characters with no value
		gn = gn.replace(/f/g, " ")
		gn = gn.replace(/h/g, " ")
		gn = gn.replace(/j/g, " ")
		gn = gn.replace(/c/g, " ")
		gn = gn.replace(/v/g, " ")
		gn = gn.replace(/y/g, " ")
		
	 	gn = gn.split(',');
	 	let y = 0;
			
		gn.forEach(element => {
			y = y + Number(element);
		});

		amt = y;
		return amt;
	 }


 function hebrewCalc(hn) {
				
		hn = hn.replace(/sh/g, ",300");
		hn = hn.replace(/ch/g, ",8");
		hn = hn.replace(/th/g, ",400");
		hn = hn.replace(/ts/g, ",90");
		hn = hn.replace(/a/g, ",1")
		hn = hn.replace(/b/g, ",2")
		hn = hn.replace(/g/g, ",3")
		hn = hn.replace(/d/g, ",4")
		hn = hn.replace(/h/g, ",5")
		hn = hn.replace(/v/g, ",6") //could be "w" in older text 
		hn = hn.replace(/z/g, ",7")
		hn = hn.replace(/t/g, ",9")
		hn = hn.replace(/y/g, ",10")
		hn = hn.replace(/k/g, ",20"),
		hn = hn.replace(/l/g, ",30"),
		hn = hn.replace(/m/g, ",40"),
		hn = hn.replace(/n/g, ",50"),
		hn = hn.replace(/s/g, ",60"),
		// hn = hn.replace(/ʿ/g, ",70"), also removes nonletter symbols
		hn = hn.replace(/p/g, ",80"),
		hn = hn.replace(/f/g, ",80"),
		hn = hn.replace(/q/g, ",100")
		hn = hn.replace(/r/g, ",200")

		// Replace the characters with no value
		hn = hn.replace(/e/g, " ")
		hn = hn.replace(/o/g, " ")
		hn = hn.replace(/w/g, " ")
		hn = hn.replace(/c/g, " ")
		hn = hn.replace(/i/g, " ")
		hn = hn.replace(/j/g, " ")
		hn = hn.replace(/u/g, " ")
		hn = hn.replace(/x/g, " ")
		
	 	hn = hn.split(',');
	 	let x = 0;
			
		hn.forEach(element => {
			x = x + Number(element);
		});

		amount = x;
		return amount;
	 }
	});

	// Parse command-line arguments
	cli.parse(process.argv);

// let hebrewGematriaDict = {
			//"a": 1,    // Aleph (א)
			//"b": 2,    // Bet (ב) — (also could be "v" in modern Hebrew)
			//"g": 3,    // Gimel (ג)
			//"d": 4,    // Dalet (ד)
			//"h": 5,    // He (ה)
			//"v": 6,    // Vav (ו) — (also could be "w" in older texts)
			//"z": 7,    // Zayin (ז)
			//"t": 9,    // Tet (ט)
			//"y": 10,   // Yod (י) — (sometimes "i" in older texts)
			//"k": 20,   // Kaf (כ) — (also "kh" without dagesh)
			//"l": 30,   // Lamed (ל)
			//"m": 40,   // Mem (מ)
			//"n": 50,   // Nun (נ)
			//"s": 60,   // Samekh (ס)
			//"ʿ": 70,   // Ayin (ע) — (ʿ for pharyngeal sound or silent)
			//"p": 80,   // Pe (פ) — (also "f" without dagesh)
			//"f": 80,   // Pe (פ) — (also "f" without dagesh)
			//"q": 100,  // Qof (ק)
			//"r": 200,  // Resh (ר)
			//"sh": 300, // Shin (ש) — (also "s" for Sin)
			//"th": 400,  // Tav (ת) — (sometimes "t" with dagesh)
			//"ts": 90,  // Tsade (צ) — (also "ṣ" in some texts)
			//"ch": 8,   // Chet (ח)
	//}


		// Online resource https://en.wikipedia.org/wiki/Sampi
	 //let greekIsopsephyDict = {
	//hn = gn.replace("a", ",1")
	//gn = gn.replace("b", ",2")
	//gn = gn.replace("g", ",3")
	//gn = gn.replace("d", ",4")
	//gn = gn.replace("e", ",5")
	//gn = gn.replace("w", ",6")
	//gn = gn.replace("z", ",7")
	//gn = gn.replace("ē", ",8")
	//gn = gn.replace("i", ",10")
	//gn = gn.replace("k", ",20"),
	//gn = gn.replace("l", ",30"),
	//gn = gn.replace("m", ",40"),
	//gn = gn.replace("n", ",50"),
	//gn = gn.replace("x", ",60"),
	//gn = gn.replace("o", ",70"),
	//gn = gn.replace("p", ",80"),
	//gn = gn.replace("q", ",90")
	//gn = gn.replace("r", ",100")
	//gn = gn.replace("s", ",200")
	//gn = gn.replace("t", ",300")
	//gn = gn.replace("u", ",400")
	//gn = gn.replace("ō", ",800")
	//gn = gn.replace('sampi', ",900");
	//gn = gn.replace('th', ",9");
	//gn = gn.replace('rh', ",100");
	//gn = gn.replace('ph', ",500");
	//gn = gn.replace('kh', ",600");
	//gn = gn.replace('ps', ",700");
	//gn = gn.replace('st', ",6");
		//} 

	//	let romanNumeralsDict = {
		//	"I": 1,
		//	"II": 2,
		//	"III": 3,	
		//	"IV": 4 ,
		//	"V": 5,
		//	"VI": 6,
		//	"VII": 7,	
		//	"VIII": 8,	
		//	"IX": 9,
		//	"X": 10,
		//	"XI": 11,	
		//	"XII": 12,	
		//	"XIII": 13,	
		//	"XIV": 14,
		//	"XV": 15,
		//	"XVI": 16,	
		//	"XVII" : 17,	
		//	"XVIII" : 18,	
		//	"XIX": 19,
		//	"XX" : 20	,
		//	"XXI": 21,	
		//	"XXII": 22,	
	//	//	"XXIII": 23,	
		//	"XXIV": 24	,
		//	"X/XX": 30	,
		//	"XL": 40	,
		//	"L": 50	,
		//	"LX": 60	,
		//	"LXX": 70,	
		//	"LXXX": 80,	
		//	"XC": 90	,
		//	"C": 100	,
		//	"CI": 101,	
		//	"CII": 102,	
		//	"CC": 200	,
		//	"CCC": 300	,
		//	"CD": 400	,
		//	"D": 500	,
		//	"DC": 600,	
		//	"DCC": 700,	
		//	"DCCC": 800,	
		//	"CM": 900	,
		//	"M" : 1000
	//	};  

