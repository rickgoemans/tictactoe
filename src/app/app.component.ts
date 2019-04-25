import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChildren('fieldElement') fieldElements: QueryList<any>;

    fields: Array<{
        id: number;
        name: string;
    }>                                                = [
        {
            id: 1,
            name: 'first',
        },
        {
            id: 2,
            name: 'second',
        },
        {
            id: 3,
            name: 'third',
        },
        {
            id: 4,
            name: 'fourth',
        },
        {
            id: 5,
            name: 'fifth',
        },
        {
            id: 6,
            name: 'sixth',
        },
        {
            id: 7,
            name: 'seventh',
        },
        {
            id: 8,
            name: 'eighth',
        },
        {
            id: 9,
            name: 'ninth',
        },
    ];
    private availableMoves: Array<number>             = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ];
    private winningCombinations: Array<Array<number>> = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 5, 7],
        [3, 6, 9],
        [4, 5, 6],
        [7, 8, 9],
    ];
    private currentPlayer: number                     = 1;
    private player1html                               = '<i class="fas fa-times" style="font-size: 20em;"></i>';
    private player1moves: Array<number>               = [];
    private player2html                               = '<i class="far fa-circle" style="font-size: 20em;"></i>';
    private player2moves: Array<number>               = [];
    private winningNumbers: Array<number>             = [];

    ngAfterViewInit() {
        this.fieldElements.forEach((fieldElement) => {
            console.log('FieldElement: ', fieldElement);
        });
    }

    setIcon(id: number): void {
        // Reset if we have a winner
        if (this.winningNumbers.length === 3) {
            this.reset();
        }

        // Reset if we all fields are filled
        if (!this.availableMoves.length) {
            this.reset();
        }

        if (this.availableMoves.includes(id)) {
            this.addMove(id);

            // Add symbol
            this.addSymbol(id);

            if (this.checkWon()) {
                console.log('Player ' + this.currentPlayer + ' won with: ', this.winningNumbers);
            } else {
                this.switchPlayer();
            }
        }
    }

    private addMove(id: number): void {
        this.availableMoves = this.availableMoves.filter(move => move != id);

        if (this.currentPlayer === 1) {
            this.player1moves.push(id);
        } else {
            this.player2moves.push(id);
        }

        this.sortMoves();
    }

    private addSymbol(id: number) {
        this.fieldElements.forEach((fieldElement) => {
            if (fieldElement.nativeElement.id === id.toString()) {
                let html;

                if (this.currentPlayer === 1) {
                    html = this.player1html;
                } else {
                    html = this.player2html;
                }

                fieldElement.nativeElement.innerHTML = html;
            }
        });
    }

    /**
     * Sort moves ascending
     */
    private sortMoves(): void {
        if (this.currentPlayer === 1) {
            this.player1moves = this.player1moves.sort((a, b) => a - b);
        } else {
            this.player2moves = this.player2moves.sort((a, b) => a - b);
        }
    }

    private checkWon(): boolean {
        let movesToCheck = [];

        if (this.currentPlayer === 1) {
            if (this.player1moves.length < 3) {
                return false;
            }

            movesToCheck = this.player1moves;
        } else {
            if (this.player2moves.length < 3) {
                return false;
            }

            movesToCheck = this.player2moves;
        }

        for (let combination of this.winningCombinations) {
            this.winningNumbers = [];

            for (let number of combination) {
                if (movesToCheck.includes(number)) {
                    this.winningNumbers.push(number);
                }
            }

            if (this.winningNumbers.length === 3) {
                return true;
            }
        }

        return false;
    }

    private switchPlayer(): void {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    private reset() {
        this.availableMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.player1moves   = [];
        this.player2moves   = [];
        this.winningNumbers = [];

        this.fieldElements.forEach((fieldElement) => {
            fieldElement.nativeElement.innerHTML = '';
        });
    }
}
