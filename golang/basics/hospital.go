package main

import (
	"fmt"
)

type Hospital struct {
	name     string
	patients uint16
}

func (s Hospital) showData() {
	fmt.Println("name:", s.name, "\npatients:", s.patients)
}

func main() {
	s := Hospital{name: "FORBES", patients: 16}
	s.showData()
}
