/*
{{if pipeline}}
T1
{{else if pipeline}}
T2
{{else}}
T3
{{end}}

loops-

The meaning of . inside and outside the loop is different

{{range pipeline}}
T1
{{end}}

{{range pipeline}}
T1
{{else}}
T2
{{end}}

Logical operators-

eq, ne

lt, gt

le, ge

and, or, not  // all arguments are evaluated every single time, even if we use and

*/

package main

import (
	"html/template"
	"os"
)

type Student struct {
	Name     string
	Age      uint8
	Subjects []string
}

func addSubject(s *Student, name string) {
	s.Subjects = append(s.Subjects, name)
}

const str = `
{{- "Hello world" }}
{{if eq .Name "angad"}}

{{range .Subjects}}
name of subject: {{ . }}
{{else}}
No subject found
{{end}}

{{else}}
You are not angad
{{end}}
`

func main() {
	s := Student{Name: "angad", Age: 12, Subjects: []string{}}
	addSubject(&s, "dhruv")
	addSubject(&s, "madhu")
	addSubject(&s, "rakesh")
	//fmt.Println(s)

	t := template.Must(template.New("").Parse(str))
	t.Execute(os.Stdout, s)
}
