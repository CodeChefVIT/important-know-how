/**
Built in functions:-

html, js, urlquery

print, printf, println

index, len, with

template.Funcs(funcMap Funcmap)
type FuncMap map[string] interface{}  // This is inside template.FuncMap{}

**/

package main

import (
	"html/template"
	"os"
)

type Product struct {
	Name  string
	Price float32
}

const tax = 6.5 / 100

const templateString = `
Name: {{ .Name }}
Price: {{ printf "%.2f" .Price }}
Tax: {{ Calctax .Price | printf "%.2f" }}
`

func main() {
	p := Product{Name: "Kurkure", Price: 10.2123}

	// defining a function n the template
	fm := template.FuncMap{}
	fm["Calctax"] = func(price float32) float32 {
		return price * tax
	}

	t := template.Must(template.New("").Funcs(fm).Parse(templateString))

	t.Execute(os.Stdout, p)
}
