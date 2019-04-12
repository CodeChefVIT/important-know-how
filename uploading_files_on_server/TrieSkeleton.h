#define maxsize 27

class Trie
{
    Trie *array[27];
    bool end;

public:

    Trie(){
        end=false;
    }

    bool load();
    bool unload();
    bool check(char *str );
    void dell(Trie* t);
};



Trie *root;
