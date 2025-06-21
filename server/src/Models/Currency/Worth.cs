namespace DMTools.Models.Currency;

public class Worth 
{
    private Dictionary<string, int> _dictionary;	
    private static Piece CP = new("CP", "Copper", 10);
    private static Piece SP = new("SP", "Silver", 5);
    private static Piece EP = new("EP", "Electum", 2);
    private static Piece GP = new("GP", "Gold", 10);
    private static Piece PP = new("PP", "Platinum", 0);
    
    private Piece[] Pieces {get;} = [CP, SP, EP, GP, PP];
    
    public Worth(int cp = 0, int sp = 0, int ep = 0, int gp = 0, int pp = 0)
    {
        _dictionary = new Dictionary<string, int> {{CP.Name, cp}, {SP.Name, sp}, {EP.Name, ep}, {GP.Name, gp}, {PP.Name, pp}};
    }
    
    public int Get(string key)
    {
        if (_dictionary.ContainsKey(key))
            return _dictionary[key];
        else
            return 0;
    }
    
    
    public void Add(Worth worth)
    {
        foreach (var key in _dictionary.Keys)
            if (worth.Get(key) > 0)
                this.AddPiece(key, worth.Get(key));
    }
    
    public void Subtract(Worth worth)
    {
        var thisTotal = this.Total();
        var otherTotal = worth.Total();
        
        if (thisTotal == otherTotal) 
        {
            this.Empty();
        } else if (thisTotal > otherTotal)
        {
            foreach (var key in _dictionary.Keys.Reverse())
            {
                bool amountChanged = true;
                int previousAmount;
                // filling from next amount
                while (this.Get(key) < worth.Get(key) && amountChanged)
                {
                    previousAmount = this.Get(key);
                    this.FillFromNextPiece(key);
                    if (previousAmount == this.Get(key)) amountChanged = false;
                }
                // filling from previous if from next didnt work
                while (!amountChanged && this.Get(key) < worth.Get(key))
                {
                    this.FillFromPreviousPiece(key);
                }
                    
                
                this.SubtractPiece(key, worth.Get(key));
            }
        } else 
        {
            Console.WriteLine("Not enough currency.");
        }
    }
    
    public int Total() // In copper to avoid decimals
    {
        return this.Get("CP") + (this.Get("SP") * 10) + (this.Get("EP") * 50) + (this.Get("GP") * 100) + (this.Get("PP") * 1000);
    }
    
    public void Empty()
    {
        foreach (var key in _dictionary.Keys)
        {
            this.SubtractPiece(key, this.Get(key));
        }
    }
    
    private void FillFromNextPiece(string key)
    {
        var currentIndex = Array.FindIndex(Pieces, (x) => x.Name == key);
        
        if (currentIndex < 4)
        {
            if (this.Get(Pieces[currentIndex + 1].Name) < 1)
            {
                FillFromNextPiece(Pieces[currentIndex + 1].Name);
                if (this.Get(Pieces[currentIndex + 1].Name) > 0)
                {
                    this.AddPiece(key, Pieces[currentIndex].NextStep);
                    this.SubtractPiece(Pieces[currentIndex + 1].Name, 1);
                }
            } else 
            {
                this.AddPiece(key, Pieces[currentIndex].NextStep);
                this.SubtractPiece(Pieces[currentIndex + 1].Name, 1);
            }
        }
    }
    
    private void FillFromPreviousPiece(string key)
    {
        var currentIndex = Array.FindIndex(Pieces, (x) => x.Name == key);
        
        if (currentIndex > 0)
        {
            if (this.Get(Pieces[currentIndex - 1].Name) < Pieces[currentIndex - 1].NextStep)
            {
                FillFromPreviousPiece(Pieces[currentIndex - 1].Name);
                if (this.Get(Pieces[currentIndex - 1].Name) >= Pieces[currentIndex - 1].NextStep)
                {
                    this.AddPiece(key, 1);
                    this.SubtractPiece(Pieces[currentIndex - 1].Name, Pieces[currentIndex - 1].NextStep);
                }
            } else 
            {
                this.AddPiece(key, 1);
                this.SubtractPiece(Pieces[currentIndex - 1].Name, Pieces[currentIndex - 1].NextStep);
            }
        }
    }
    
    private void AddPiece(string key, int amount)
    {
        if (_dictionary.ContainsKey(key))
        {
            _dictionary[key] += amount;
        }
        else
            Console.WriteLine($"Invalid key: {key}");
    }
    
    private void SubtractPiece(string key, int amount)
    {
        if (_dictionary.ContainsKey(key))
            _dictionary[key] -= amount;
        else
            Console.WriteLine($"Invalid key: {key}");
    }
    
    public override string ToString()
    {
        var result = String.Join(" ", _dictionary.Keys.Where(x => this.Get(x) > 0).Select(x => $"{this.Get(x)}{x.ToLower()}"));
        return string.IsNullOrEmpty(result) ? "You have no money." : result;
    }
    
    public string TotalInGold()
    {
        var totalInCopper = this.Total();
        if (totalInCopper % 100 == 0)
            return $"You have exactly {totalInCopper / 100}gp";
        else
            return $"You have about {totalInCopper / 100}gp";
    }
}