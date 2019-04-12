package main

import (
	"database/sql"
	"log"
	"net/http"

	_ "github.com/mattn/go-sqlite3" // _ used to say that we only want to run the code of the package
	// use `go get` to get packages from github etc.
	"./model"
)

func main() {
	db := connectToDB()
	defer db.Close()
	http.ListenAndServe(":3000", nil)
}

func connectToDB() *sql.DB {
	db, err := sql.Open("sqlite3", "./mydb.db") // postgres://username:password@localhot/dbname
	if err != nil {
		log.Println("Unable to connect to database")
		return nil
	}
	//model.Setdatabase(db)
	data, _ := model.TestDB(db)
	log.Println(data.Username)
	return db
}
