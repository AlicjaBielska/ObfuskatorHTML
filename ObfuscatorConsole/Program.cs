using Obfuscator;
using System;

namespace ObfuscatorConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var Hotdol = new Hotdol();
            Hotdol.Obfuscate(string.Empty);
        }
    }
}
