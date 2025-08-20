<h3 align="center">XFLIP</h3>
<p align="center">Xtend-Flex Lang-Lex Interpretation Parser</p>

### ABANDONED

XFLIP is abandoned after deliberate considerations. Mixed feelings.

For the lexer generator, I was thinking of implementing a LALR parser for regex, translating them to
NFAs with Thompson's construction, then combine them and convert them to a DFA via subset's
construction, and minify.

For the parser generator, I was thinking of implementing a finite pushdown automata, but never
thought of the details.

But it did not end up well. Tools like Jison existed,having based on Flex/Bison, they would be
better than whatever I would be able to write. Afterall, I'm not seriously interested in language
theory and automatons, but rather convicted to other fields of mathematics.

Maybe one day I would look back and regret not to complete this project, but I deem this a correct
choice to listen to my actual interests. That's all.
