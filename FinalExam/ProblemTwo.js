
function MessageEncrypter(input) {
let inputLinesToChek = Number(input.shift());

let pattern = [*]|[@][A-Z]{1}[a-z]{3,}[*]|[@]:\s[[]([a-zA-Z][\d])[]][|]


}
MessageEncrypter(
    [ '3',
  '*Request*: [I]|[s]|[i]|',
  '*Taggy@: [73]|[73]|[73]|',
  'Should be valid @Taggy@: [v]|[a]|[l]|' ]

)

// MessageEncrypter(
//     [ '3',
//   '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
//   '*tAGged*: [i][i][i]|',
//   'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|' ]
// )
