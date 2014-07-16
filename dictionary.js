/**
* key-value map collection data struct for js.
*
*
* Usage:
* init a instance.
* var dic = new Dictionary();
* add a key-value to dictionary
* dic.add('a',123);
*
* check if exist key in dictionary,here is return true
* dic.contains('a')
*
* get value by key
* var v = dic.get('a')
*
* remove the key-value from dictionary
* dic.remove('a')
* 
* @author Roy Du <roy@leadnt.com>
* @write in july 16th 2014.
* @link http://www.leadnt.com
* @version 0.1.0
**/



function KVStuct(k,v)
{
    this.k = k;
    this.v = v;
}

function Dictionary()
{
    this.key_list = Array();
    this.map = Array();
}


Dictionary.prototype.contains = function(k)
{
    var i = this.key_list.length;
    while (i--)
    {
        if (this.key_list[i] === k)
        {
            return true;
        }
    }
    return false;
}

Dictionary.prototype.add = function(k, v)
{
    for (var i = 0; i < this.key_list.length; i++)
    {
        if (this.key_list[i] === k)
        {
            this.map[i].v = v;
            return;
        }
    }
    
    this.key_list[this.key_list.length] = k;
    this.map[this.map.length] = new KVStuct(k, v);
}

Dictionary.prototype.remove = function(k)
{
    var key,v;
    for (var i = 0; i < this.key_list.length; i++) 
    {
        key = this.key_list.pop();
        v = this.map.pop();
        if (key === k) 
        {
            continue;
        }
        this.key_list.unshift(key);
        this.map.unshift(v);
    }
}


Dictionary.prototype.get = function(k)
{
    for(var i = 0;i < this.key_list.length; i++)
    {
        if(this.key_list[i] === k)
        {
            return this.map[i];
        }
    }
}