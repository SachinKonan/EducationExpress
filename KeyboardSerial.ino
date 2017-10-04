#include "Keyboard.h"

void setup() {
  // open the serial port:
  Keyboard.press(KEY_LEFT_CTRL);
  delay(1000);
  Keyboard.press(KEY_ESC);
  delay(100);
  Keyboard.releaseAll();
  Keyboard.println("notepad");
  delay(1000);
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
    "--------------",
    "|Sachin Konan|",
    "--------------",
    "Email: sachinkonan480@gmail.com",
    "Phone: 480-621-9929",
    "github: https://github.com/SachinKonan/",
    "Education_",
    "1. Hamilton High School?",
    "Senior Courses:!",
    "AP Government, AP Statistics, Honors Science Research, Engineering 102, Digital Photography, AP Economics, AP English Literature*",
    "GPA: 4.0(Unweighted)!",
    "+",
    "Experience_",
    "1.ASU Connection One Laboratory?",
    "RF Design Student!",
    "Worked with High Frequency Oscilloscopes and Spectrum Analyzers for Radar Project*",
    "2. F1 in Schools?",
    "Team Manager and CAD Designer!",
    "Designed a car using Autodesk Inventor and ANSYS CFD and coordinated meetings and national flights*",
    "3. Si Se Puede FRC Robotics?",
    "Lead Programmer!",
    "Wrote Extensive Java Code for general robot movement and control over robotic subsystems*",
    "Wrote extensive Python Code that uses OpenCV and Keras for object detection and 3D Localization*",
  };
  for (int x = 0; x < sizeof(lines); x++)
  {
    String current = lines[x];
    // key ? = regular, ! = indent one, * indent twice
    if (current.endsWith("_"))
    {
      newSection(current, 150);
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
      padPrint(current, 150);
    }
  };
}


void loop()
{

}

