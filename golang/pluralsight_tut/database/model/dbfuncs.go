package model

import (
	"database/sql"
	"fmt"
	"log"
)

type userType struct {
	Username string
	Password string
}

type todoType struct {
	Username string
	Tasks    string
}

func Setdatabase(db *sql.DB) {
	db = db
}

// QueryRow is used for select and insert statements that return a particular row
// Query returns more rows
// QueryContext takes in a context too
// for uppdation and deletion use Exec or ExecContext funcs
func TestDB(db *sql.DB) (*userType, error) {
	log.Println("Connected to database")
	result := &userType{}
	row := db.QueryRow(`
		SELECT USERNAME, PASSWORD
		FROM USER
		WHERE USERNAME=$1
	`, "ANGAD")
	err := row.Scan(&result.Username, &result.Password)

	switch {
	case err == sql.ErrNoRows:
		log.Println("No rows were returned")
		return nil, fmt.Errorf("USer not found")

	case err != nil:
		return nil, err
	}

	info, err := db.Exec(`
		UPDATE USER
		SET USERNAME=$1 AND PASSWORD=$2
		WHERE USERNAME=$3
	`, "DHRUV", "DHRUVPWD", "ANGAD")

	if err != nil {
		log.Println("Error updating")
		return nil, err
	}

	log.Println(info)
	return result, nil
}
