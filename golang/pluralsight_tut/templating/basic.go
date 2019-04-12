/**
	3 functions associated with templates:-
	1. New
	2. Parse
	3. Execute
**/

package main

import (
	"html/template"
	"log"
	"os"
)

func main() {
	templateString := `<h1> Hello world </h1>`
	t, err := template.New("title").Parse(templateString)
	if err != nil {
		log.Println(err)
	}
	err = t.Execute(os.Stdout, nil) // data can be assed instead of nil
	if err != nil {
		log.Println(err)
	}
}
