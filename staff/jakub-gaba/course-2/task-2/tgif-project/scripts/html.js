
var API = 'werjoImcxnptmekG4oOVTHidgbQOBbmJh4gj90mn';
var url = 'https://api.propublica.org/congress/v1/117/senate/members.json';

export async function fetchJson() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-API-Key": API
    }
  });
  const data = await response.json();
  return data;
}

export function makeMemberRows(members){
console.log(members);
}