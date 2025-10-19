echo "#1. Using the tput Command"
cols=$(tput cols)
rows=$(tput lines)
echo "Terminal width: $cols height: $rows"

echo "#2. Using the versatile tool stty Command"
geometry=$(stty size)
rows=$(echo $geometry | cut -d' ' -f1)
cols=$(echo $geometry | cut -d' ' -f2)
echo "Terminal width: $cols height: $rows"

echo "#3. Using ANSI Escape Codes"
# ANSI escape codes allows us to gain greater flexibility and 
echo -ne "\033[999;999H\033[6n"
IFS=';' read -sdR -p $'\E[6n' ROW COL
rows=${ROW#*[}
cols=$COL
# carriage return for the next progress print
echo -e "\rTerminal width: $cols height: $rows"

# In this example, we use echo -ne “\033[999;999H\033[6n” to move the cursor to the bottom-right corner before querying its location. Then, IFS=’;’ read -sdR -p $’\E[6n’ ROW COL reads the answer from the terminal and includes the current cursor position in the format ESC[row;colR. Furthermore, we then extract the row and column numbers from the response and save them in rows and cols. Finally, we print the results at the end of the script.

# This method is suitable for interactive scripts in which the terminal size can change during execution. For example, in a real-time monitoring application, we may wish to dynamically alter the layout as the user resizes the terminal window.

echo "4. Using \$COLUMNS and \$LINES Environment Variables"
echo "Terminal width: $COLUMNS height: $LINES"