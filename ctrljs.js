var fso = new ActiveXObject("Scripting.FileSystemObject");
var a = fso.CreateTextFile("success.txt", true);
a.WriteLine("SUCCESS");
a.Close();