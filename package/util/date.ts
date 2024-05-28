export const dateFormat = (
  date: Date | string | undefined | null,
  { time = false, end = false, split = '-' } = {}
): string => {
  if (!date) {
    return '';
  }

  if (new Date(date).toString() === 'Invalid Date') {
    if (typeof date === 'string') {
      date = date.replace(/-/g, '').replace(/\./g, '');
      if (date.length === 8) {
        date = new Date(date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6, 8));
      } else {
        date = new Date(date);
      }
      if (new Date(date).toString() === 'Invalid Date') {
        return '';
      }
    }
  } else {
    if (typeof date === 'string' && date.length === 10) {
      date += ' 00:00:00';
    }
    date = new Date(date);
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = time ? (end ? 23 : date.getHours()) : 0;
  const minute = time ? (end ? 59 : date.getMinutes()) : 0;
  const second = time ? (end ? 59 : date.getSeconds()) : 0;

  if (time) {
    return `${year}${split}${month < 10 ? '0' + month : month}${split}${
      day < 10 ? '0' + day : day
    } ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${
      second < 10 ? '0' + second : second
    }`;
  } else {
    return `${year}${split}${month < 10 ? '0' + month : month}${split}${
      day < 10 ? '0' + day : day
    }`;
  }
};

export const dateAdd = (
  date: Date | string,
  {
    days,
    months,
    years,
    str,
  }: {
    days?: number | string;
    months?: number | string;
    years?: number | string;
    str?: string;
  }
) => {
  const result = typeof date === 'string' ? new Date(date) : date;

  if (str) {
    const type = str.slice(-1);
    const value = parseInt(str.slice(0, -1));
    if (type === 'd') {
      days = value;
    } else if (type === 'm') {
      months = value;
    } else if (type === 'y') {
      years = value;
    }
  }

  if (days) {
    result.setDate(result.getDate() + Number(days));
  }
  if (months) {
    result.setMonth(result.getMonth() + Number(months));
  }
  if (years) {
    result.setFullYear(result.getFullYear() + Number(years));
  }
  return dateFormat(result, {
    time: true,
  });
};

export const secToTime = (sec: number) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);
  const seconds = sec - hours * 3600 - minutes * 60;
  return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

export const getDiffDays = (
  start: Date | string | undefined,
  end: Date | string | undefined,
  { plusOneDay = false, addSuffix = '' } = {}
) => {
  if (!start || !end) return undefined;

  const startDate = dateFormat(start);
  const endDate = dateFormat(end);
  const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
  return diff / (1000 * 60 * 60 * 24) + (plusOneDay ? 1 : 0) + addSuffix;
};

export const getAge = (date?: string) => {
  if (!date) return undefined;

  const birthDate = new Date(`${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const excelTimeToJsTime = (excelTime: number | string) => {
  const time = Number(excelTime);
  const date = new Date(1899, 11, 30);
  date.setDate(date.getDate() + time);
  return date;
};

export const getDiffString = (startTime?: string, endTime?: string) => {
  if (!startTime || !endTime) return undefined;

  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const timeDifference = endDate.getTime() - startDate.getTime();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerHour = 60 * 60 * 1000;
  const millisecondsPerMinute = 60 * 1000;
  const days = Math.floor(timeDifference / millisecondsPerDay);
  const hours = Math.floor((timeDifference % millisecondsPerDay) / millisecondsPerHour);
  const minutes = Math.floor((timeDifference % millisecondsPerHour) / millisecondsPerMinute);
  return `${days}d${hours}h${minutes}n`;
};
