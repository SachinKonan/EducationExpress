#include "Keyboard.h"

void setup() {
  // open the serial port:
  delay(2000);
  Keyboard.press(KEY_LEFT_CTRL);
  delay(1000);
  Keyboard.press(KEY_ESC);
  delay(100);
  Keyboard.releaseAll();
  Keyboard.println("notepad");
  delay(4000);
  Keyboard.press(KEY_RETURN);
  delay(500);
  Keyboard.releaseAll();
  nw();
}

void newLine()
{
  Keyboard.press(KEY_RETURN);
  delay(50);
  Keyboard.releaseAll();
}

void padPrint(String x, int width)
{
  String pad = "";
  for (int i = 0; i < floor((width - x.length()) / 2); i++)
  {
    pad += " ";
  }
  Keyboard.print(pad + x + pad);
  newLine();
}
void newSection(String x, int width)
{
  String pad = "";
  for (int i = 0; i < width - x.length(); i++)
  {
    pad += "_";
  }
  Keyboard.print(x + pad);
  newLine();
}
void regularPrint(String x, int indent)
{
  String n = "";
  for (int i = 0; i < indent; i++)
  {
    n += " ";
  }
  Keyboard.print(n + x);
  newLine();
}

void nw()
{
  String lines[] = {
    F("--------------"),
    F("|Sachin Konan|"),
    F("--------------"),
    F("Email: sachinkonan480@gmail.com"),
    F("Phone: 480-621-9929"),
    F("github: https://github.com/SachinKonan/"),
    F("Education_"),
    F("1. Hamilton High School?"),
    F("Senior Courses:!"),
    F("Maintained 4.0 Unweighted GPA and 12 AP Classes Total*"),
    F("+"),
    F("Experience_"),
    F("1.ASU Connection One Laboratory?"),
    F("Worked with High Frequency Oscilloscopes and Spectrum Analyzers for Radar Project!"),
    F("+"),
    F("Activities_"),
    F("2. F1 in Schools?"),
    F("Team Manager and CAD Designer!"),
    F("Designed a car using Autodesk Inventor and ANSYS CFD and coordinated meetings and national flights*"),
    F("3. Si Se Puede FRC Robotics?"),
    F("Wrote Extensive Java Code for general robot movement and control over robotic subsystems!"),
    F("4. Science Fair?"),
    F("Developed a low-cost Doppler radar system capable of detecting buried earthquake victims (2015-2017)!"),
    F("5. Science Bowl?"),
    F("Founder and President -- mentored and formed a team with teacher Mrs.Bhagdev!"),
    F("+"),
    F("Awards_"),
    F("1.2x International Science Fair Qualifier(16-17) & 2nd in Embed Systems & AirForce Award(17)?"),
    F("2.2x 1st in Embed Systems at Arizona State Fair(17)?"),
    F("3.F1 in Schools 2nd and 1st at Regional and National Qual(15-16)?"),
    F("Best Engineered Car, Fastest Car, Social Media Special Awards?"),
    F("4.Top 64 International Policy Debate?"),
    F("5.2nd in Great AZ Code Hackathon(17)?"),
    F("6.2nd and 1st at Phoenix Half Marathon(Age<17) (14-15)?"),
    F("+"),
    F("Volunteer_"),
    F("1.Senior Center and 70+hrs(16)?"),
    F("2.Frye Elementary and Red Dragon FLL Mentoring(15-17)?"),
    };
  for (int x = 0; x < sizeof(lines); x++)
  {
    String current = lines[x];
    // key ? = regular, ! = indent one, * indent twice
    if (current.endsWith("_"))
    {
      newSection(current, 137);
    }
    else if (current.endsWith("?"))
    {
      regularPrint(current.substring(0, current.length() - 1), 0);
    }
    else if (current.endsWith("!"))
    {
      regularPrint(current.substring(0, current.length() - 1), 5);
    }
    else if (current.endsWith("+"))
    {
      newLine();
    }
    else if (current.endsWith("*"))
    {
      regularPrint(current.substring(0, current.length() - 1), 10);
    }
    else
    {
      padPrint(current, 137);
    }
  };
  Keyboard.release(KEY_RETURN);
}


void loop()
{
  Keyboard.release(KEY_RETURN);
}

