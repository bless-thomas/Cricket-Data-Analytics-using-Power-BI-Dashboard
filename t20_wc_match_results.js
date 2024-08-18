// Click the 'play' button in the top right to run this code:
// 1. Go to the page where you want to start
navigate('https://www.espncricinfo.com/records/tournament/team-match-results/icc-men-s-t20-world-cup-2022-23-14450');
collect(parse());

// Code that will parse page HTML into structured data.
// Use parse() in interaction code to read this data.
let matchSummary=[]

const allRows = $('table.ds-w-full.ds-table.ds-table-xs.ds-table-auto.ds-overflow-scroll.ds-scrollbar-hide > tbody > tr');

allRows.each((index, element) => {
 		const tds = $(element).find('td');   //find the td
		matchSummary.push({
              'team1':  $(tds[0]).text(),
              'team2':  $(tds[1]).text(),
              'winner':  $(tds[2]).text(),
              'margin':  $(tds[3]).text(),
              'ground': $(tds[4]).text(),
              'matchDate': $(tds[5]).text(),
              'scorecard':   $(tds[6]).text() 
		})   
 })
return {
  "matchSummary": matchSummary
};