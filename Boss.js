/**
 * Monstruo final al que tenemos que destruir
 */
class Boss extends Opponent {

    constructor(game) {
        // Más lógico añadir aquí bossImage y no usar el isBoss
        // Modificar el Opponent y enviarle los param necesarios
        // super(game, bossImage, bossImageDead, bossSpeed)
        const bossImageDead = FINAL_BOSS_PICTURE_DEAD,
        bossSpeed = FINAL_BOSS_SPEED,
        isBoss = true; // En cualquier caso puedo enviar directamente true al constructor de la clase padre

        super(game, isBoss);
        // Estas 2 líneas no serían necesarias
        this.myImageDead = bossImageDead;
        this.speed = bossSpeed;
        
    }
    /**
     * Mata al boss final y termina el juego
     */
    collide() {
        
        super.collide();
        this.game.endGame();

    }
}
