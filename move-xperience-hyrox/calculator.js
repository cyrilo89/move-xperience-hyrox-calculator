/* Calculs indépendants de l'interface, en secondes. */
const HyroxCalculator = (() => {
  function parseTime(value, allowHours = false) {
    const pattern = allowHours ? /^(\d{1,3}:)?\d{1,3}:[0-5]\d$/ : /^\d{1,3}:[0-5]\d$/;
    if (!pattern.test(String(value).trim())) throw new Error(allowHours ? 'Utilise m:ss ou h:mm:ss.' : 'Utilise m:ss, avec des secondes de 00 à 59.');
    const parts = String(value).trim().split(':').map(Number);
    if (parts.length === 3 && parts[1] > 59) throw new Error('Les minutes doivent être comprises entre 00 et 59.');
    return parts.reduce((sum, n) => sum * 60 + n, 0);
  }
  function formatTime(seconds, hours = false) {
    const s = Math.round(Math.abs(seconds));
    const sign = seconds < 0 ? '−' : '';
    if (hours || s >= 3600) return sign + Math.floor(s / 3600) + ':' + String(Math.floor(s % 3600 / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    return sign + Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }
  function calculate(pace, stations, roxzone, goal) {
    if (!Number.isFinite(pace) || pace <= 0 || stations.length !== 8 || stations.some(s => !Number.isFinite(s) || s <= 0) || !Number.isFinite(roxzone) || roxzone < 0 || !Number.isFinite(goal) || goal <= 0) throw new Error('Vérifie tes temps : allure, stations et objectif doivent être positifs.');
    const running = pace * 8;
    const workouts = stations.reduce((a, b) => a + b, 0);
    const total = running + workouts + roxzone;
    let cumulative = 0;
    const splits = stations.map(station => { cumulative += pace + station; return cumulative; });
    return { running, workouts, total, splits, roxzone, difference: total - goal, requiredPace: goal > workouts + roxzone ? (goal - workouts - roxzone) / 8 : null, speed: 3600 / pace };
  }
  return { parseTime, formatTime, calculate };
})();
if (typeof module !== 'undefined') module.exports = HyroxCalculator;
