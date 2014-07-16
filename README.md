dictionary.js
=============
####The key-value map collection data struct for javascript.

author Roy Du <roy@leadnt.com><br>
write in july 16th 2014.<br>
my blog: http://www.leadnt.com<br>
version 0.1.0<br>

### Usage:
#### init a instance.
        var dic = new Dictionary();
     
#### add a key-value to dictionary
        dic.add('a',123);
#### check if exist key in dictionary,here is return true
        dic.contains('a')
        
#### get value by key
        var v = dic.get('a')

#### remove the key-value from dictionary
        dic.remove('a')
 
