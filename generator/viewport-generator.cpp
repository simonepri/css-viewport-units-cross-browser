/*!
* Viewport v1.2.0 (https://github.com/simone97/css-viewport-units-cross-browser/)
** Copyright 2015 Simone Primarosa. (https://github.com/simone97/)
* Licensed under GNU General Public License version 3.0 (http://www.gnu.org/licenses/gpl-3.0.html)
*/
/*! viewport-generator.cpp v1.2.0 | GNU GPL | https://github.com/simone97/css-viewport-units-cross-browser/generator/viewport-generator.cpp */

#include <fstream>
#include <string>
#include <vector>
#include <iterator>
#include <sstream>

using namespace std;

const string PROFILE = "https://github.com/simone97/";
const string REPO = PROFILE + "css-viewport-units-cross-browser/";
const string FOLDER = REPO + "library/";
const string FILENAME = "viewport";
const string VERSION = "1.2.0";

vector<string> list_name = {
  "25",
  "33",
  "50",
  "75",
  "77",
  "100",
};

vector<double> list_value = {
  25,
  33.333333333333,
  50,
  75,
  77.777777777777,
  100,
};

vector<string> viewtype = {
  "vh",
  "vw",
  "vmin",
  "vmax"
};

vector<string> functions = {
  "$(window).height()",
  "$(window).width()",
  "Math.min($(window).height(), $(window).width())",
  "Math.max($(window).height(), $(window).width())"
};

vector<string> media = {
  "(min-height:",
  "(min-width:",
  "(orientation:landscape) and (min-height:",
  "(orientation:landscape) and (min-width:",
	"(orientation:portrait) and (min-width:",
  "(orientation:portrait) and (min-height:",
};

vector<string> property = {
  "height",
  "width",
  "font-size","line-height","letter-spacing","text-indent",
  "top","right","bottom","left",
  "padding","padding-top","padding-right","padding-bottom","padding-left",
  "margin","margin-top","margin-right", "margin-bottom","margin-left",
  "border-width","border-top-width","border-right-width","border-bottom-width","border-left-width",
};

ofstream fout;
string tobeprinted;

template <typename T> string to_str(T num) {
 ostringstream stream;
 stream << num;
 return stream.str();
}

void replaceAll(string& source, const string& from, const string& to) {
  string newString;
  newString.reserve(source.length());
  string::size_type lastPos = 0;
  string::size_type findPos;
  while(string::npos != (findPos = source.find(from, lastPos))) {
    newString.append( source, lastPos, findPos - lastPos );
    newString += to;
    lastPos = findPos + from.length();
  }
  newString += source.substr( lastPos );
  source.swap( newString );
}

string noDash(string str) {
  replaceAll(str,string("-"),string("_"));
  return str;
}

string doMinify(string& str, bool isjs = false) {
  replaceAll(str,string("\n"), string(""));
  replaceAll(str,string("  "), string(""));
  replaceAll(str,string(" = "), string("="));
  replaceAll(str,string(" + "), string("+"));
  replaceAll(str,string(" * "), string("*"));
  replaceAll(str,string(" ? "), string("?"));
  replaceAll(str,string(" : "), string(":"));
  replaceAll(str,string(" { "), string("{"));
  replaceAll(str,string(" } "), string("}"));
  replaceAll(str,string(" , "), string(","));
  replaceAll(str,string(" ; "), string(";"));
  replaceAll(str,string(" >= "), string(">="));
  replaceAll(str,string(" <= "), string("<="));
  replaceAll(str,string(" == "), string("=="));
  replaceAll(str,string(" && "), string("&&"));
  replaceAll(str,string("; "), string(";"));
  replaceAll(str,string(" ;"), string(";"));
  replaceAll(str,string(", "), string(","));
  replaceAll(str,string(" ,"), string(","));
  replaceAll(str,string("{ "), string("{"));
  replaceAll(str,string("} "), string("}"));
  replaceAll(str,string(" {"), string("{"));
  replaceAll(str,string(" } "), string("}"));
  if(!isjs) replaceAll(str,string(".css"), string(".min.css"));
  else replaceAll(str,string(".js"), string(".min.js"));
  return str;
}

int main() {
  /* CSS GENERATOR - BEGIN */
  tobeprinted.clear();
  tobeprinted += "/*!\n";
  tobeprinted += "* Viewport v" + VERSION +  " (" + REPO + ")\n";
  tobeprinted += "* Copyright 2015 Simone Primarosa. (" + PROFILE + ")\n";
  tobeprinted += "* Licensed under GNU General Public License version 3.0 (http://www.gnu.org/licenses/gpl-3.0.html)\n";
  tobeprinted += "*/\n";
  tobeprinted += "/*! " + FILENAME + ".css v" + VERSION + " | GNU GPL | " + FOLDER + FILENAME + ".css */\n\n";

  tobeprinted += ".vh-test, .vw-test, .vmin-test, .vmax-test {position:fixed;z-index:-999999;height:1px; width:1px; overflow:hidden;}\n";
  tobeprinted += ".vh-test {height: 100vh;} .vw-test {height: 100vw;} .vmin-test {height: 100vmin;} .vmax-test {height: 100vmax;}\n";
  tobeprinted += ".vu-oveflow {overflow: hidden !important;}\n\n";

  for(vector<string>::iterator vt = viewtype.begin(); vt != viewtype.end(); vt++) {
		for(vector<string>::iterator pr = property.begin(); pr != property.end(); pr++) {
			for(int i = 0; i < list_name.size(); i++) {
        tobeprinted += "[" + *vt + "-" + *pr + " = \"" + list_name[i] + "\"] {" + *pr + ":" + to_str(list_value[i]) + *vt + ";}\n";
      }
    }
    tobeprinted += "\n";
  }
  for(int v = 0; v < viewtype.size(); v++) {
	  for(int k = 128; k <= 2560; k *= 2) {
			if(v < 2) tobeprinted += "@media " + media[v] + to_str(k) + "px) {\n";
			else tobeprinted += "@media " + media[v] + to_str(k) + "px), " + media[v+2] + to_str(k) + "px) {\n";
			for(vector<string>::iterator pr = property.begin(); pr != property.end(); pr++) {
			  for(int i = 0; i < list_name.size(); i++) {
				  tobeprinted += "  .no-viewport [" + viewtype[v] + "-" + *pr + " = \"" + list_name[i] + "\"] {" + *pr + ":" + to_str(list_value[i]*(k*2/100.0)) + "px;}\n";
				}
			}
			tobeprinted += "}\n";
		}
	}
  fout.open(FILENAME+".css");
  fout<<tobeprinted;
  fout.close();
  fout.open(FILENAME+".min.css");
  fout<<doMinify(tobeprinted, false);
  fout.close();
  /* CSS GENERATOR - END */

  /* JS GENERATOR - BEGIN */
  tobeprinted.clear();
  tobeprinted += "/*!\n";
  tobeprinted += "* Viewport v" + VERSION +  " (" + REPO + ")\n";
  tobeprinted += "* Copyright 2015 Simone Primarosa. (" + PROFILE + ")\n";
  tobeprinted += "* Licensed under GNU General Public License version 3.0 (http://www.gnu.org/licenses/gpl-3.0.html)\n";
  tobeprinted += "*/\n";
  tobeprinted += "/*! " + FILENAME + ".js v" + VERSION + " | GNU GPL | " + FOLDER + FILENAME + ".js */\n\n";

  tobeprinted += "(function($) {\n";
  tobeprinted += "\"use strict\";\n";
  tobeprinted += "$(window).ready(function() {\n\n";

  for(vector<string>::iterator vt = viewtype.begin(); vt != viewtype.end(); vt++) {
    tobeprinted += "    var " + *vt + "_" + "need = false;\n";
  }
  tobeprinted += "\n";

  tobeprinted += "    function viewport_init() {\n";
  tobeprinted += "      var deviceAgent = navigator.userAgent.toLowerCase();\n";
  tobeprinted += "      var oldIOS = (/ip(ad|hone|od).*os 3_/.test(deviceAgent) || /ip(ad|hone|od).*os 4_/.test(deviceAgent) || /ip(ad|hone|od).*os 5_/.test(deviceAgent) || /ip(ad|hone|od).*os 6_/.test(deviceAgent) || /ip(ad|hone|od).*os 7_/.test(deviceAgent));\n";
  tobeprinted += "      if(oldIOS) {\n";
	for(vector<string>::iterator vt = viewtype.begin(); vt != viewtype.end(); vt++) {
    tobeprinted += "        " + *vt + "_" + "need = false;\n";
  }
	tobeprinted += "        return;\n";
	tobeprinted += "      }\n";
  tobeprinted += "      var html = $(\"html\");\n";
  tobeprinted += "      html.removeClass(\"no-viewport\");\n";
  tobeprinted += "      html.addClass(\"vu-overflow\");\n";
  for(int i = 0; i < viewtype.size(); i++) {
    tobeprinted += "      var " + viewtype[i] + "_test = " + "$(\"<div class='" + viewtype[i] + "-test'></div>\").appendTo(html);\n";
    tobeprinted += "      var " + viewtype[i] + "_calc = (" + viewtype[i] + "_test).height() - " + functions[i] + ";\n";
    tobeprinted += "      " + viewtype[i] + "_" + "need = (" + viewtype[i] + "_calc >= -1 && " + viewtype[i] + "_calc <= 1) ? false : true;\n";
    tobeprinted += "      " + viewtype[i] + "_test.remove();\n";
    //tobeprinted += "      console.log(" + viewtype[i] + "_calc + ' ' + (" + viewtype[i] + "_test).height() + ' ' + " + function[i] + ");\n";
    tobeprinted += "      if(" + viewtype[i] + "_" + "need == true) {\n";
    for(int j = 0; j < property.size(); j++) {
      tobeprinted += "        window." + viewtype[i] + "_" + noDash(property[j]) + " = " + "$(\"[" + viewtype[i] + "-" + property[j] + "]\");\n";
    }
    tobeprinted += "      }\n";
  }
  tobeprinted += "      html.removeClass(\"vu-overflow\");\n";
  tobeprinted += "    }\n";

  tobeprinted += "    function viewport_exec() {\n";
  tobeprinted += "      var html = $(\"html\");\n";
  tobeprinted += "      html.addClass(\"vu-overflow\");\n";
  for(int i = 0; i < viewtype.size(); i++) {
    tobeprinted += "      if(" + viewtype[i] + "_" + "need == true) {\n";
    tobeprinted += "        var " + viewtype[i] + "_value = " + functions[i] + "/100;\n";
    for(int j = 0; j < property.size(); j++) {
      tobeprinted += "        window." + viewtype[i] + "_" + noDash(property[j]) + ".each(function() {$(this).css(\"" + property[j] + "\", " + "$(this).attr(\"" + viewtype[i] + "-" + property[j] + "\") * " + viewtype[i] + "_value" + ");});\n";
    }
    tobeprinted += "      }\n";
  }
  tobeprinted += "      html.removeClass(\"vu-overflow\");\n";
  tobeprinted += "    }\n";

  tobeprinted += "    viewport_init();\n    viewport_exec();\n    $(window).resize(function() { viewport_exec(); });\n  });\n\n";
  tobeprinted += "})(jQuery);";

  fout.open(FILENAME+".js");
  fout<<tobeprinted;
  fout.close();
  fout.open(FILENAME+".min.js");
  fout<<doMinify(tobeprinted, true);
  fout.close();
  /* JS GENERATOR - END */
  return 0;
}
