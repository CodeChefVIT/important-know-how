package main

import (
	"html/template"
	"os"
)

type Product struct {
	Name string
	Cost float32
}

const tax = 6.25 / 100

func (p Product) findTax() float32 {
	return p.Cost * tax
}

/*
{{- "str" -}} means skip white spaces before and after context
{{ command1 command2 command3 }} pipelining, return of command 2 as input of command 1
{{ command1 | command2 }} output of command1 as input to command 2
*/
const templateString = `
{{- "Hello world" }}
Name: {{ .Name }}
Price: {{ printf "%.2f" .Cost }}
Tax: {{ .findTax | printf "%.2f" }}
`

func main() {
	p := Product{Name: "Kurkure", Cost: 10.0123}
	t := template.Must(template.New("").Parse(templateString))
	t.Execute(os.Stdout, p)
}
