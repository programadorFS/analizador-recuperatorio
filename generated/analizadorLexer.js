// Generated from c:/Users/Martin.L/Desktop/UTN/segundo/Sintaxis/Analizador-7/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,74,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,0,0,14,1,1,3,2,5,
3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,1,0,3,2,0,65,
90,97,122,1,0,48,57,5,0,33,33,44,44,46,46,58,59,63,63,73,0,1,1,0,0,0,0,3,
1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,
15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,
0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,35,1,0,0,0,5,37,1,0,0,0,7,39,1,0,0,0,9,41,
1,0,0,0,11,43,1,0,0,0,13,50,1,0,0,0,15,52,1,0,0,0,17,58,1,0,0,0,19,62,1,
0,0,0,21,66,1,0,0,0,23,68,1,0,0,0,25,70,1,0,0,0,27,72,1,0,0,0,29,30,5,119,
0,0,30,31,5,104,0,0,31,32,5,105,0,0,32,33,5,108,0,0,33,34,5,101,0,0,34,2,
1,0,0,0,35,36,5,40,0,0,36,4,1,0,0,0,37,38,5,41,0,0,38,6,1,0,0,0,39,40,5,
123,0,0,40,8,1,0,0,0,41,42,5,125,0,0,42,10,1,0,0,0,43,44,5,112,0,0,44,45,
5,114,0,0,45,46,5,105,0,0,46,47,5,110,0,0,47,48,5,116,0,0,48,49,5,102,0,
0,49,12,1,0,0,0,50,51,5,59,0,0,51,14,1,0,0,0,52,53,5,98,0,0,53,54,5,114,
0,0,54,55,5,101,0,0,55,56,5,97,0,0,56,57,5,107,0,0,57,16,1,0,0,0,58,59,5,
34,0,0,59,60,5,48,0,0,60,61,5,34,0,0,61,18,1,0,0,0,62,63,5,34,0,0,63,64,
5,49,0,0,64,65,5,34,0,0,65,20,1,0,0,0,66,67,5,34,0,0,67,22,1,0,0,0,68,69,
7,0,0,0,69,24,1,0,0,0,70,71,7,1,0,0,71,26,1,0,0,0,72,73,7,2,0,0,73,28,1,
0,0,0,1,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class analizadorLexer extends antlr4.Lexer {

    static grammarFileName = "analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'while'", "'('", "')'", "'{'", "'}'", "'printf'", 
                         "';'", "'break'", "'\"0\"'", "'\"1\"'", "'\"'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, "LETRA", "DIGITO", "SIMBOLO" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "LETRA", "DIGITO", 
                      "SIMBOLO" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

analizadorLexer.EOF = antlr4.Token.EOF;
analizadorLexer.T__0 = 1;
analizadorLexer.T__1 = 2;
analizadorLexer.T__2 = 3;
analizadorLexer.T__3 = 4;
analizadorLexer.T__4 = 5;
analizadorLexer.T__5 = 6;
analizadorLexer.T__6 = 7;
analizadorLexer.T__7 = 8;
analizadorLexer.T__8 = 9;
analizadorLexer.T__9 = 10;
analizadorLexer.T__10 = 11;
analizadorLexer.LETRA = 12;
analizadorLexer.DIGITO = 13;
analizadorLexer.SIMBOLO = 14;



