// struct

package main

import "fmt"

type student struct {
	name string
	age  uint8
}

// methods in struct
func (s student) getname() {
	print(s.name, "\n")
}

func (s *student) setDefault() {
	s.name = "default sharma"
}

func main() {

	s1 := student{name: "angad sharma", age: 19}
	s2 := student{"dhruv sharma", 26}

	fmt.Println("Student 1:", s1.name)
	fmt.Println("Student 2:", s2.name)

	s1.getname()
	s2.getname()

	s1.setDefault()
	s1.getname()
}
